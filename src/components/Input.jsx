import React from "react";

const Input = (props) => {
  return (
    <input
      className={props.className}
      value={props.item}
      onChange={props.onChange}
    ></input>
  );
};

export default Input;
