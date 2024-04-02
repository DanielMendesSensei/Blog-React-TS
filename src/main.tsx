import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Files Imports
import App from "./App";

// CSS imports
import "./index.css";

// Routes imports
import Home from "./routes/Home/Home";
import NewPost from "./routes/NewPost/NewPost";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";

// Router Instance
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
