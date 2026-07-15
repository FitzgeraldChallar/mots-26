import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <App />

    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 3500,
        style: {
          borderRadius: "16px",
          fontSize: "15px",
          padding: "16px",
        },
      }}
    />

  </React.StrictMode>
);
