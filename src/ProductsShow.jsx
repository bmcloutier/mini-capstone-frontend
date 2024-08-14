export function ProductsShow({ product, onAddCart }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onAddCart(params);
  };

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <form onSubmit={handleSubmit}>
        <div>
          quantity: <input name="quantity" type="number" />
        </div>
        <div>
          <input name="product_id" type="hidden" value={product.id} />
        </div>
        <button type="submit">Add to Cart</button>
        {/* <button onClick={() => onDestroy(product.id)}>Destroy</button> */}
      </form>
    </div>
  );
}
