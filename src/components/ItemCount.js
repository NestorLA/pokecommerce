import React, { useState } from "react";

import BuyButton from "./BuyButton";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ItemCount(props) {
  const [count, setCount] = useState(1);
  const numMax = props.Max;
  const numMin = props.Min;

  const addCount = (e) => {
    e.preventDefault();
    setCount(Math.min(count + 1, numMax));
  };

  const minusCount = (e) => {
    e.preventDefault();
    setCount(Math.max(count - 1, numMin));
  };
  return (
    <>
      <ButtonGroup>
        <Button variant="dark" className="" onClick={addCount}>
          +
        </Button>
        <input
          id="counter"
          className="font-weight-bold text-right"
          value={count}
          disabled
        />
        <Button variant="dark" className="" onClick={minusCount}>
          -
        </Button>
      </ButtonGroup>
      <BuyButton count={count} />
    </>
  );
}

export default ItemCount;
