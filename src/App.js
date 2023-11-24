import { RouterProvider } from "react-router-dom";
import { Router } from "./lib/router";
import "./styles/global.css";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
