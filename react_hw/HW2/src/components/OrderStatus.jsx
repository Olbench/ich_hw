function OrderStatus({ orders }) {
  return (
    <ul>
      {orders.map((order) => {
        return (
          <li key={order.orderId}>
            Order #{order.orderId}: {order.status}
          </li>
        );
      })}
    </ul>
  );
}
export default OrderStatus;
