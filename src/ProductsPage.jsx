import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { useState, useEffect } from "react";
import axios from "axios";
export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <SignupPage />
      <LoginPage />
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} />
    </main>
  );
}
