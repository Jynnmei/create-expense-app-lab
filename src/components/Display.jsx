import React from "react";
import Item from "./Item";

const Display = (props) => {
  return (
    <section className="display">
      {props.data.map((item, index) => {
        return (
          <Item
            key={index}
            item={item.item}
            price={item.price}
            date={item.date}
            onDelete={() => props.handleDelete(index)}
          ></Item>
        );
      })}
    </section>
  );
};

export default Display;
