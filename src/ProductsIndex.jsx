export function ProductsIndex({ products }) {
  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt="" />
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}
