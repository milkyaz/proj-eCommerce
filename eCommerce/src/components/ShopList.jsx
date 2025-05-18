import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import ShopCard from "./ShopCard";
import "../index.css";
export default function ShopList(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <main>
      <div className="items">
        {loading ? (
          <Preloader />
        ) : items.length ? (
          items.map((item) => <ShopCard key={item.id} {...item} />)
        ) : (
          <p>Не удалось загрузить список</p>
        )}
      </div>
    </main>
  );
}
