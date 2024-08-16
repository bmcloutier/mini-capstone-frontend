import { useState } from "react";
export function ProductsIndex({ products, onShow }) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>All Products</h1>
      Search:{" "}
      <input list="titles" type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <datalist id="titles">
        {products.map((product) => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      {products
        .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.images[0].url} alt="" />
            <p>Price: {product.price}</p>
            <button onClick={() => onShow(product)}>More info</button>
          </div>
        ))}
    </div>
  );
}
