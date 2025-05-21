import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header({ orders }) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-btn ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {orders.map((el) => (
              <Order key={el.id} item={el} />
            ))}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
