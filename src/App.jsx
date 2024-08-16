/* global process */
import { Header } from "./Header";
import { Home } from "./Home";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsShowPage } from "./ProductsShowPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { OrdersIndexPage } from "./OrdersIndexPage";
import { Footer } from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { CartIndexPage } from "./CartIndexPage";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mini-capstone-api-dmmg.onrender.com";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/products",
        element: <ProductsIndexPage />,
        loader: () => axios.get("/products.json").then((response) => response.data),
      },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      { path: "/products/new", element: <ProductsNewPage /> },
      {
        path: "/orders",
        element: <OrdersIndexPage />,
        loader: () => axios.get("/orders.json").then((response) => response.data),
      },
      {
        path: "/carted_products",
        element: <CartIndexPage />,
        loader: () => axios.get("/carted_products.json").then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
