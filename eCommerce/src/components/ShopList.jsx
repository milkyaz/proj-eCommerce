import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import ShopCard from "./ShopCard";
import "../index.css";
import ShowAlert from "./ShowAlert";

export default function ShopList({ orders, setOrders }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // для показа сообщения после добавления в корзину
  const [showAlert, setShowAlert] = useState(null);

  useEffect(() => {
    fetch("https://furniture-api.fly.dev/v1/products")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setItems(data.data.slice(0, 24));
        } else {
          console.error("Unexpected data format:", data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const addToOrder = (el, quantity = 1) => {
    // setOrders([...orders, el]);
    setShowAlert(el.name + " добавлен в корзину");
    const itemIndex = orders.findIndex((value) => value.id === el.id);
    if (itemIndex < 0) {
      const newItem = {
        ...el,
        quantity: quantity, // исправлена опечатка ниже
      };
      setOrders([...orders, newItem]);
    } else {
      const newItem = {
        ...orders[itemIndex],
        quantity: orders[itemIndex].quantity + quantity,
      };
      const newCart = orders.slice();
      newCart.splice(itemIndex, 1, newItem);
      setOrders(newCart);
    }
  };

  const hideAlert = () => setShowAlert(null);
  return (
    <main>
      <div className="items">
        {showAlert && <ShowAlert text={showAlert} hideAlert={hideAlert} />}
        {loading ? (
          <Preloader />
        ) : items.length ? (
          items.map((item) => (
            <ShopCard key={item.id} {...item} onAdd={addToOrder} />
          ))
        ) : (
          <p>Не удалось загрузить список</p>
        )}
      </div>
    </main>
  );
}
