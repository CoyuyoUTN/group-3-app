import { useState } from "react";

const ItemCount = ({ Stock, Initial }) => {
  const [count, setCount] = useState(Initial);

  const increment = () => {
    count < Stock && setCount(count + 1);
  };

  const decrease = () => {
    count > Initial && setCount(count - 1);
  };
  return (
    <div className="container-button">
      <h2 className="title-stock">Add to car </h2>
      <div className="buttons">
        <button className="button-34" onClick={increment}>
          Add item
        </button>
        <button className="button-34" onClick={decrease}>
          Delete item
        </button>
      </div>

      <p className="button-text"> {count} </p>
    </div>
  );
};

export default ItemCount;
