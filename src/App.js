import React from "react";

function App() {
  const value = "World";

   const alert = () => {
    alert("Hello");
  }
  return (
    <>
      <div>Hello {value}</div>;
      <button onClick={alert}>Click me</button>
    </>
  );
}

export default App;
