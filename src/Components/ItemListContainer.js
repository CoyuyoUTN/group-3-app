import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ nameEcommerce }) => {
  const stock = 15;
  const initial = 1;
  const APIURL = "https://fakestoreapi.com/products";

  const [product, setProduct] = useState([]);
  const { category } = useParams();

  const getProductsAxios = async () => {
    const getAxios = await axios.get("https://fakestoreapi.com/products/");
    console.log("getAxios", getAxios);
    if (category) {
      setProduct(
        getAxios.data.filter((product) => product.category === category)
      );
    } else {
      setProduct(getAxios.data);
    }
  };

  useEffect(() => {
    getProductsAxios();
  }, [category]);

  return (
    <div className="container-items">
      <h1 className="title-name">{nameEcommerce}</h1>
      <ItemCount Stock={stock} Initial={initial} />
      <ItemList products={product} />
    </div>
  );
};

export default ItemListContainer;
