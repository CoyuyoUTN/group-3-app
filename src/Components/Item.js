import { Link } from "react-router-dom";
import PopoverPositionedExample from "./PopoverPositionedExample";

const Item = ({ title, price, id, category, description, image }) => {
  return (
    <div key={id} className="container-clothes">
      <Link to={`/${id}`}>
        <h3 className="title-clothe">
          <span>{title}</span>
        </h3>
        <img
          src={image}
          alt="img"
          height="120"
          width="120"
          title={description}
        />
        <p className="price">${price}</p>
      </Link>
      <PopoverPositionedExample description={description} />
    </div>
  );
};

export default Item;
