import React from "react";
// import Specials from "./Specials";

const SpecialButton = props => {
  console.log("special", props);
  return <button className="spec">{props.text}</button>;
};

export default SpecialButton;
