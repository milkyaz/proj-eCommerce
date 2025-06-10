import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import ShopCard from "./ShopCard";
import ShowAlert from "./ShowAlert";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productSlice";


export default function ShopList({ orders, setOrders }) {
  const [showAlert, setShowAlert] = useState(null);

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToOrder = (el, quantity = 1) => {
    setShowAlert(`${el.name} добавлен в корзину`);
    const itemIndex = orders.findIndex((value) => value.id === el.id);

    if (itemIndex < 0) {
      const newItem = { ...el, quantity };
      setOrders([...orders, newItem]);
    } else {
      const updatedItem = {
        ...orders[itemIndex],
        quantity: orders[itemIndex].quantity + quantity,
      };
      const newCart = [...orders];
      newCart.splice(itemIndex, 1, updatedItem);
      setOrders(newCart);
    }
  };

  const hideAlert = () => setShowAlert(null);

  const items = Array.isArray(products.data) ? products.data : [];

  return (
    <main>
      <div className="items">
        {showAlert && <ShowAlert text={showAlert} hideAlert={hideAlert} />}

        {loading ? (
          <Preloader />
        ) : error ? (
          <p style={{ color: "red" }}>Ошибка загрузки: {error}</p>
        ) : items.length > 0 ? (
          items.map((item) => (
            <ShopCard key={item.id} {...item} onAdd={addToOrder} />
          ))
        ) : (
          <p>Нет товаров для отображения.</p>
        )}
      </div>
    </main>
  );
}
