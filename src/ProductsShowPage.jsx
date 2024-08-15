import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { ProductsShow } from "./ProductsShow";

export function ProductsShowPage() {
  const product = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (id, params) => {
    console.log("handleUpdate", params);
    axios.patch(`/products.json/${id}.json`, params).then(() => {
      navigate("/products");
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestory", id);
    axios.delete(`/products/${id}.json`).then(() => {
      navigate("/products");
    });
  };

  const handleAddCart = (params) => {
    console.log("handleAddCart", params);
    axios.post("/carted_products.json", params).then(() => {
      navigate("/carted_products");
    });
  };

  return (
    <div>
      <ProductsShow product={product} onUpdate={handleUpdate} onDestroy={handleDestroy} onAddCart={handleAddCart} />
    </div>
  );
}
