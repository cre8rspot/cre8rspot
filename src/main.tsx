// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import "@fontsource/overlock";
// import "@fontsource/overlock/400.css";

// const rootElement = document.getElementById("root");
// if (!rootElement) {
//   throw new Error("Root element not found");
// }

// createRoot(rootElement).render(<App />);


import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/overlock";
import "@fontsource/overlock/400.css";
// Import global animations
import "./styles/animations.css";
// Import responsive typography
import "./styles/typography-responsive.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);
