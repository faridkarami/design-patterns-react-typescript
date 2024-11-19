import { useState } from "react";
import service, { Order } from "../pattern/OrderService";

const ReadOrder = () => {
  const [order, setOrder] = useState<Order[]>([]);

  const handleClick = () => {
    setOrder([...service.get()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Read</button>
      {order.length > 0 ? (
        <ul>
          {order.map((item, index) => (
            <li key={index}>
              ID: {item.id}, Quantity: {item.qty}
            </li>
          ))}
        </ul>
      ) : (
        <p>Empty!</p>
      )}
    </div>
  );
};

export default ReadOrder;