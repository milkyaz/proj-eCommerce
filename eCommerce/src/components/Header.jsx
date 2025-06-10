import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";
import { useSelector } from "react-redux";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  const cart = useSelector((state) => state.products.cart);

  const showOrders = (orders) => {
    return (
      <div>
        {orders.map((el) => (
          <Order key={el.id} item={el} />
        ))}
      </div>
    );
  };
  console.log(cart);

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    );
  };

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
            {cart.length > 0 ? showOrders(cart) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
