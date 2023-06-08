import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// import { makeServer } from "./server";

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
