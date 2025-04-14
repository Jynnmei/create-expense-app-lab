// import React from "react";

// const Input = (props) => {
//   const handleItemChange = (event) => {
//     props.setItem(event.target.value);
//   };

//   const handlePriceChange = (event) => {
//     props.setPrice(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     props.setDate(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("You clicked submit.");
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <label className="col-sm-6" htmlFor="item"></label>
//         <input
//           className="col-sm-6"
//           id="item"
//           type="text"
//           value={props.item}
//           onChange={handleItemChange}
//         />
//       </div>

//       <div className="row">
//         <label className="col-sm-6" htmlFor="price"></label>
//         <input
//           className="col-sm-6"
//           id="price"
//           type="text"
//           value={props.price}
//           onChange={handlePriceChange}
//         />
//       </div>

//       <div className="row">
//         <label className="col-sm-6" htmlFor="date"></label>
//         <input
//           className="col-sm-6"
//           id="date"
//           type="text"
//           value={props.date}
//           onChange={handleDateChange}
//         />
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Input;

// ========================================================
// import React from "react";

// const Input = (props) => {
//   return (
//     <div className="input">
//       <input value={props.item} onChange={props.handleChange} />
//     </div>
//   );
// };

// export default Input;

// ==========================

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
// ===================
{
  /* <input
        value={props.price}
        onChange={(e) => props.setPrice(e.target.value)}
      />
      <input
        value={props.date}
        onChange={(e) => props.setDate(e.target.value)}
      /> */
}
