// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import App from "./App";
import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

// Fichero src/index.js (código nuevo)



ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
