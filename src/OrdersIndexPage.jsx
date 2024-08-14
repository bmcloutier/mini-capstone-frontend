import { useLoaderData } from "react-router-dom";
import { OrdersIndex } from "./OrdersIndex";

export function OrdersIndexPage() {
  const orders = useLoaderData();
  return <OrdersIndex orders={orders} />;
}
