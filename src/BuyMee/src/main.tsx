import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./components/HomePage.tsx";
import ProductDetails from "./routes/ProductDetails.tsx";
import LoginPage from "./routes/LoginPage.tsx";
import { actionLogin, actionSignUp } from "./routes/authentication.tsx";
import SignUpPage from "./routes/SignUpPage.tsx";
import CartPage from "./routes/CartPage.tsx";
import SearchPage from "./routes/SearchPage.tsx";
import { CookiesProvider } from "react-cookie";

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
        path: "product/:id",
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
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);