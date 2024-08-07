import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import "../styles/globals.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
], {
    future: {
        v7_normalizeFormMethod: true,
    }
})

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
