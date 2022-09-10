import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

import axios from "axios";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ nameEcommerce }) => {
  const stock = 15;
  const initial = 1;
  const APIURL = "https://fakestoreapi.com/products";

  const [product, setProduct] = useState([]);
  const { category, id } = useParams();
  console.log(category, id);

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

    console.log("getAxios", getAxios);

    if (category) {
      setProduct(
        getAxios.data.filter((product) => product.category === category)
      );
    } else if (id) {
      setProduct(getAxios.data.filter((product) => product.id === id));
    } else {
      setProduct(getAxios.data);
    }
  };

  useEffect(() => {
    getProductsAxios();
  }, [category, id]);

  return (
    <div className="container-items">
      <h1 className="title-name">{nameEcommerce}</h1>
      <ItemCount Stock={stock} Initial={initial} />
      <ItemList products={product} />
    </div>
  );
};

export default ItemListContainer;
