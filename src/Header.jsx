import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">All Products</Link> |{" "}
        <Link to="/products/new">New Product</Link> | <Link to="/carted_products">Cart</Link> |{" "}
        <Link to="/orders">Orders</Link> | <Link to="/signup">Sign up</Link> | <Link to="/login">Sign in</Link> |{" "}
        <LogoutLink />
      </nav>
    </header>
  );
}
