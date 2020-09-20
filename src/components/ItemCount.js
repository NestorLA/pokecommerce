import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ItemCount(props) {
  const [count, setCount] = useState(props.Initial);

  return (
    <>
    <ButtonGroup>
      <Button
        variant="dark"
        className=""
        onClick={() => setCount(Math.min(count + 1, props.Max))}
      >
        +
      </Button>
      <input id="counter"className="font-weight-bold text-right" value={count} /> 
      <Button
        variant="dark"
        className=""
        onClick={() => setCount(Math.max(count - 1, props.Min))}
      >
        -
      </Button>
      </ButtonGroup>
    </>
  );
}

export default ItemCount;
