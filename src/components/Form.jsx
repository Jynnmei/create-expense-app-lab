import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import "./Form.css";
import Button from "./Button";

const Form = (props) => {
  // const [formData, setFormData] = useState({
  //   item:'',
  //   price:'',
  //   date:'',
  // });

  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleItemChange = (event) => {
    setItem(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ item, price, date });
    console.log("You clicked submit.");

    setItem("");
    setPrice("");
    setDate("");
  };

  return (
    <section className="form">
      <div className="row">
        <Label className="col-sm-5">Item</Label>
        <Input
          className="col-sm-7"
          value={item}
          onChange={handleItemChange}
        ></Input>
      </div>

      <div className="row">
        <Label className="col-sm-5">Price</Label>
        <Input
          className="col-sm-7"
          value={price}
          onChange={handlePriceChange}
        ></Input>
      </div>

      <div className="row">
        <Label className="col-sm-5">Date</Label>
        <Input
          className="col-sm-7"
          value={date}
          onChange={handleDateChange}
        ></Input>
      </div>
      <Button className="btn-primary" onClick={handleSubmit}>
        Submit
      </Button>
    </section>
  );
};

export default Form;
