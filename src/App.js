import React from "react";
import "./App.css";
import { First } from "./components/First.js";
import image from "./images/image.jpg"
export const App = () => {
  return (
    <div className="app">
      <p>Create Your own App</p>
      <h1>Hello World</h1>
      <img src={image}/>
      <First />
    </div>
  );
};
