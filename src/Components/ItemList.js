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

/* <div className="container-clothes" key={product.id}>
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
          </div>*/
