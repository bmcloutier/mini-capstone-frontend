import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProductsNew } from "./ProductsNew";

export function ProductsNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    axios.post("/products.json", params).then((response) => {
      console.log(response);
      navigate(`/products/${response.data.id}`);
    });
  };
  return (
    <div>
      <ProductsNew onCreate={handleCreate} />
    </div>
  );
}
