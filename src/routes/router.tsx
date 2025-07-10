import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Work from "../pages/Work";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/reviews",
        element: <h1>reviews</h1>,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contact",
        element: <h1>Contact Me</h1>,
      },
    ],
  },
]);
