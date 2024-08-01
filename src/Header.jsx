import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">Sign up</Link> | <Link to="/login">Login</Link> | <LogoutLink />
      </nav>
    </header>
  );
}
