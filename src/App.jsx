import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { Footer } from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";

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
      { path: "/", element: <ProductsPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/products/new", element: <ProductsNewPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
