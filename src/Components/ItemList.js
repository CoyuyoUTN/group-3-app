import Item from "./Item";

const ItemList = ({ products }) => {
  console.log("Products en itemList", products);

  return (
    <div className="container-items-products">
      {products.map((product, index) => {
        return (
          <Item
            key={index}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            image={product.image}
          />
        );
      })}
    </div>
  );
};
export default ItemList;

