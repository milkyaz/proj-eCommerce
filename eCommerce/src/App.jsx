import ShopList from "./components/ShopList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [orders, setOrders] = useState([]);

console.log(orders)
  return (
    <div className="wrapper">
      <Header orders={orders} />
      <ShopList setOrders={setOrders} orders={orders}  />
      <Footer />
    </div>
  );
}

export default App;
