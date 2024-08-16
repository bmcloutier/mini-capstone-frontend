import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/products">All Products</Link> |{" "}
        {localStorage.jwt === undefined ? (
          <>
            <Link to="/signup">Sign up</Link> | <Link to="/login">Sign in</Link>
          </>
        ) : (
          <>
            <Link to="/products/new">New Product</Link> | <Link to="/carted_products">Cart</Link> |&nbsp;
            <Link to="/orders">Orders</Link> |&nbsp;
            <LogoutLink />
          </>
        )}
      </nav>
    </header>
  );
}
