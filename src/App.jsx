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
        loader: () => axios.get("http://localhost:3000/products.json").then((response) => response.data),
      },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => response.data),
      },
      { path: "/products/new", element: <ProductsNewPage /> },
      {
        path: "/orders",
        element: <OrdersIndexPage />,
        loader: () => axios.get("http://localhost:3000/orders.json").then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
