import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import PopoverPositionedExample from "./PopoverPositionedExample";

const ItemListContainer = ({ nameEcommerce }) => {
  const stock = 15;
  const initial = 1;
  const APIURL = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);

  const get_data = async () => {
    try {
      const response = await fetch(APIURL);
      const json = await response.json();
      console.log(json);
      setProduct(json);
    } catch (error) {
      console.log("Mensaje de error");
    }
  };

  useEffect(() => {
    get_data();
  }, []);

  return (
    <div className="container-items">
      <h1 className="title-name">{nameEcommerce}</h1>
      <ItemCount Stock={stock} Initial={initial} />
      <div className="container-items-products">
        {product.map((product) => {
          return (
            <div className="container-clothes">
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

              <PopoverPositionedExample
                description={product.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
