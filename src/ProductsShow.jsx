export function ProductsShow({ product }) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
