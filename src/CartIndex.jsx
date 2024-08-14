import { useLoaderData, Link } from "react-router-dom";

export function CartIndex({ onDestroy }) {
  const carted_products = useLoaderData();
  return (
    <div>
      <h1>Hello Shopping Cart!</h1>
      {carted_products.map((item) => (
        <div key={item.id}>
          <p>
            {item.quantity} x {item.product.name} (${item.product.price} each)
          </p>
          <button onClick={() => onDestroy(item.id)}>Remove</button>
          <hr />
        </div>
      ))}
      <Link to="/products">Continue Shopping</Link>
      <button>Check Out</button>
    </div>
  );
}
