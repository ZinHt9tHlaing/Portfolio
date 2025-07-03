import { createBrowserRouter } from "react-router-dom";
import App from "../App";

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
        element: <h1>about Me</h1>,
      },
      {
        path: "/reviews",
        element: <h1>reviews</h1>,
      },
      {
        path: "/work",
        element: <h1>Work</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact Me</h1>,
      },
    ],
  },
]);
