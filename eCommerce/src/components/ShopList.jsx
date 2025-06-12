import { useEffect } from "react";
import Preloader from "./Preloader";
import ShopCard from "./ShopCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import { Alert } from "./Alert";

export default function ShopList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const items = Array.isArray(products.data) ? products.data : [];

  return (
    <main>
      <div className="items">
        <Alert />
        {loading ? (
          <Preloader />
        ) : error ? (
          <p style={{ color: "red" }}>Ошибка загрузки: {error}</p>
        ) : items.length > 0 ? (
          items.map((item) => <ShopCard key={item.id} {...item} />)
        ) : (
          <p>Нет товаров для отображения.</p>
        )}
      </div>
    </main>
  );
}
