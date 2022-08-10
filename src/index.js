import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
// import "./App.css";
// export const App = () => {
//   return (
//     <div className="app">
//       <h1>Hello World</h1>
//       <p>Create Your own App</p>
//     </div>
//   );
// };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
