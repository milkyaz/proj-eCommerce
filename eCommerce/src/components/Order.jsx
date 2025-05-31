import { FaTrash } from "react-icons/fa";

export default function Order({ item }) {
  const { id, name, price, image_path } = item;
  return (
    <div className="item">
      <div id={"product-" + id} className="card">
        <div className="card__img">
          <img className="img" src={image_path} alt="" />
        </div>
        <div className="card-content">
          <h2>{name}</h2>
          <b>Цена: {price} руб. -</b>
          <b> {item.quantity} шт.</b>
          <FaTrash className="delete" />
        </div>
      </div>
    </div>
  );
}
