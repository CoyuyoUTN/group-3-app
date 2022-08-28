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
      <h2 className="title-stock">Stockear </h2>
      <div className="buttons">
        <button className="glow-on-hover" onClick={increment}>
          Add item
        </button>
        <button className="glow-on-hover" onClick={decrease}>
          Delete item
        </button>
      </div>

      <p className="button-text"> Elementos cargados: {count} </p>
    </div>
  );
};

export default ItemCount;
