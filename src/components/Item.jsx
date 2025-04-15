import React from "react";
import Label from "./Label";
import Button from "./Button";

const Item = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    props.onDelete();
    console.log("You have deleted");
  };

  return (
    <div className="row">
      <Label className="col-md-3">Item: {props.item}</Label>
      <Label className="col-md-3">Price: {props.price}</Label>
      <Label className="col-md-3">Date: {props.date}</Label>
      <Button className="btn-primary col-md-3" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default Item;
