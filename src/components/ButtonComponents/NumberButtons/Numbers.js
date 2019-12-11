import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.

//Import your array data to from the provided data file

const Numbers = props => {
  const [buttonNumbers] = useState(numbers);
  return (
    <div>
      {buttonNumbers.map(number => (
        <NumberButton key={number} number={number} add={props.addNumber} />
      ))}
    </div>
  );
};

export default Numbers;
