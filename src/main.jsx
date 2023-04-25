import { createRoot } from "react-dom/client";
import App from "./components/App";
const rootElement = document.querySelector("#root");
createRoot(rootElement).render(<App />);