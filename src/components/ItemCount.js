import React from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ItemCount(props) {
  const numMax = props.Max;
  const numMin = props.Min;

  const addCount = (e) => {
    e.preventDefault();
    props.setCount(Math.min(props.count + 1, numMax));
  };

  const minusCount = (e) => {
    e.preventDefault();
    props.setCount(Math.max(props.count - 1, numMin));
  };
  return (
    <>
      <ButtonGroup>
        <Button variant="danger" className="" onClick={minusCount}>
          -
        </Button>
        <input
          id="counter"
          className="font-weight-bold text-right mr-1 text-white"
          value={props.count}
          disabled
        />{" "}
        <Button variant="danger" className="" onClick={addCount}>
          +
        </Button>
      </ButtonGroup>
    </>
  );
}

export default ItemCount;
