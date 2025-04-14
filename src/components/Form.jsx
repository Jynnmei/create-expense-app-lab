import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import "./Form.css";
import Button from "./Button";

const Form = () => {
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
    console.log("You clicked submit.");
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
      <Button className="col-md-2" onClick={handleSubmit}>
        Submit
      </Button>
    </section>
  );
};

export default Form;

// ==============================
{
  /* <div className="label">
        <Label label="Item" />
        <Label label="Price" />
        <Label label="Date" />
      </div>

      <div className="input">
        <Input
          item={item}
          setItem={setItem}
          price={price}
          setPrice={setPrice}
          data={date}
          setDate={setDate}
        ></Input>
      </div> */
}

{
  /* <label>
<Label label="Item" />
<Input item={item} onChange={setItem} />
</label>

<label>
<Label label="Price" />
<Input item={price} onChange={setPrice} />
</label>

<label>
<Label label="Date" />
<Input item={date} onChange={setDate} />
</label> */
}
