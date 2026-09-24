import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./page";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("root ausente");

createRoot(root).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
