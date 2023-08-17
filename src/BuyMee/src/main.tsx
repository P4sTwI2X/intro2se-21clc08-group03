import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./components/HomePage.tsx";
import ProductDetails from "./components/ProductDetails.tsx";
import LoginPage from "./routes/login.tsx";
import { actionLogin, actionSignUp } from "./routes/authentication.tsx";
import SignUpPage from "./routes/signup.tsx";
import SearchPage from "./routes/search.tsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
        action: actionLogin,
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
        action: actionSignUp,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);