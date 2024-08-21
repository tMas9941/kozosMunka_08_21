import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./08-21/App.jsx";
import "./08-21/index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
