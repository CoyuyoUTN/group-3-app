import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import PopoverPositionedExample from "./PopoverPositionedExample";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemListContainer = ({ nameEcommerce }) => {
  const stock = 15;
  const initial = 1;
  const APIURL = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);

  const getproductAxios = async () => {
    const getAxios = await axios.get(APIURL).catch();
    setProduct(getAxios.data);
  };

  useEffect(() => {
    getproductAxios();
  }, []);

  return (
    <div className="container-items">
      <h1 className="title-name">{nameEcommerce}</h1>
      <ItemCount Stock={stock} Initial={initial} />
      <div className="container-items-products">
        {product.map((product) => {
          return (
            <div className="container-clothes" key={product.id}>
              <h3 className="title-clothe">
                <span>{product.title}</span>
              </h3>
              <img
                src={product.image}
                alt="img"
                height="120"
                width="120"
                title={product.description}
              ></img>
              <p className="price">${product.price}</p>

              <PopoverPositionedExample description={product.description} />
              <Link to="products">About</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
