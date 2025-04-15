// import React from "react";
// import Form from "./components/Form";
// import Display from "./components/Display";

// function App() {
//   return <Display />;
// }

// export default App;

// =========================

import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (submittedData) => {
    setFormData((prevState) => {
      return [...prevState, submittedData];
    });
    console.log("Form submitted with data:", submittedData);
  };

  const handleDelete = (indexToDelete) => {
    setFormData((prevState) => [...prevState].toSpliced(indexToDelete, 1));
    console.log("Deleted item at index:", indexToDelete);
  };

  return (
    <div>
      <Form formData={formData} onSubmit={handleFormSubmit} />
      <Display data={formData} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
