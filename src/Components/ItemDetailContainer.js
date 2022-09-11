import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const stock = 15;
  const initial = 1;
  const APIURL = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProductsAxios = async () => {
    const getAxios = await axios.get(APIURL).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

    if (id) {
      setProduct(getAxios.data.filter((product) => product.id == id));
    } else {
      setProduct(getAxios.data);
    }
  };

  useEffect(() => {
    getProductsAxios();
  }, [id]);

  console.log("Producto", product);

  return (
    <div className="container-items-products">
      {product.map((product, index) => {
        return (
          <div key={index} className="item-alone">
            <div className="item-alone-img">
              <img
                src={product.image}
                alt="img"
                height="500"
                width="500"
                title={product.description}
              />
              <p className="price-alone">${product.price}</p>
              <ItemCount Stock={stock} Initial={initial} />
            </div>
            <div className="item-alone-info">
              <h3 className="title-clothe-alone">
                <span>{product.title}</span>
              </h3>
              <div className="div-separate"></div>
              <ItemDetail description={product.description} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainer;
