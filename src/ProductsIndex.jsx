export function ProductsIndex({ products, onShow }) {
  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
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
