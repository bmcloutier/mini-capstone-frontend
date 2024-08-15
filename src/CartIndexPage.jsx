import { CartIndex } from "./CartIndex";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function CartIndexPage() {
  const navigate = useNavigate();

  const handleDestroy = (id) => {
    axios.delete(`/carted_products/${id}.json`).then(() => {
      navigate("/carted_products");
    });
  };
  const handleOrder = () => {
    axios.post("/orders.json").then(() => {
      navigate("/orders");
    });
  };
  return <CartIndex onDestroy={handleDestroy} onOrder={handleOrder} />;
}
