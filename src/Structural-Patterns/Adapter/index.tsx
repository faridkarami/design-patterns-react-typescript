import { useEffect, useState } from "react";
import { CartService } from "./pattern/cart.service";
import { IProduct } from "./pattern/product.interface";
import { CookieAdapter } from "./pattern/Adapters/cookie.adapter";
// import { LocalStorageAdapter } from "./pattern/Adapters/local-storage.adapter";

const AdapterDesignPattern = () => {
const cookieAdapter = new CookieAdapter<IProduct>('cartItems', 7);
// const localStorageAdapter = new LocalStorageAdapter<IProduct>('cartItems');
const cartService = new CartService(cookieAdapter);

const [cart, setCart] = useState<IProduct[]>([]);

useEffect(() => {
  setCart(cartService.get());
}, [cart]);

const handleClick = () => {
  cartService.add(1, 1);
};

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
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

export default AdapterDesignPattern;
