import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weathe App</h1>
      <Weather />
    </div>
  </StrictMode>
);
