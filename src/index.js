import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ActiveNumberProvider from "./context/ActiveNumberProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActiveNumberProvider>
      <App />
    </ActiveNumberProvider>
  </React.StrictMode>
);
