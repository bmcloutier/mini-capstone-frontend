export function OrdersIndex({ orders }) {
  return (
    <div>
      <h1>Hello Orders!</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Order #{order.id}</h2>
          <h3>${order.total}</h3>
          {order.carted_products.map((item) => (
            <div key={item.id}>
              <p>
                {item.quantity} x {item.product.name}
              </p>
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
}
