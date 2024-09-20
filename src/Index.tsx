import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import Counter from "./Counter";

ReactDOM.render(
  <React.StrictMode>
    <Greeting name="John" />
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);
