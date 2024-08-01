export function ProductsShow({ product, onDestroy }) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <button onClick={() => onDestroy(product.id)}>Destroy</button>
    </div>
  );
}
