import ItemCount from "./ItemCount";

const ItemListContainer = ({ nameEcommerce }) => {
  const stock = 15;
  const initial = 1;
  return (
    <div className="container-items">
      <h1 className="title-name">{nameEcommerce}</h1>
      <ItemCount Stock={stock} Initial={initial} />
    </div>
  );
};

export default ItemListContainer;
