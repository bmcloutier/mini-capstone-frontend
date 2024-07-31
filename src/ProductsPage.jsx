import { ProductsIndex } from "./ProductsIndex";
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

  useEffect(handleIndex, []);

  return (
    <main>
      <SignupPage />
      <LoginPage />
      <ProductsIndex products={products} />
    </main>
  );
}
