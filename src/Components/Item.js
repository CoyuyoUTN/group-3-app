import { Link } from "react-router-dom";
import PopoverPositionedExample from "./PopoverPositionedExample";

const Item = ({ title, price, id, category, description, image }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className="container-clothes" key={id}>
        <h3 className="title-clothe">
          <span>{title}</span>
        </h3>
        <img
          src={image}
          alt="img"
          height="120"
          width="120"
          title={description}
        ></img>
        <p className="price">${price}</p>

        <PopoverPositionedExample description={description} />
        <Link to="products">About</Link>
      </div>
    </Link>
  );
};
export default Item;
