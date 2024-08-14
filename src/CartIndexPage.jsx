import { CartIndex } from "./CartIndex";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function CartIndexPage() {
  const navigate = useNavigate();

  const handleDestroy = (id) => {
    axios.delete(`http://localhost:3000/carted_products/${id}.json`).then(() => {
      navigate("/carted_products");
    });
  };
  return <CartIndex onDestroy={handleDestroy} />;
}
