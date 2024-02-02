import "./index.css";

import { Route, RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

function App() {
  // eslint-disable-next-line no-undef
  // Use this after the variable declaration
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
