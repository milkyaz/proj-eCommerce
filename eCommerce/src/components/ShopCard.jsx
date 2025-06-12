import { useDispatch } from "react-redux";
import { addProductToCart } from "../features/productSlice";
import { showAlert } from "../features/alertSlice";

export default function ShopCard(props) {
  const { id, name, price, image_path, description, removeFromCart } = props;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addProductToCart({
        id,
        name,
        price,
        image_path,
      })
    );
    dispatch(showAlert(`${name}`)); // Уведомление
  };

  return (
    <div id={"product-" + id} className="card">
      <div className="card__img">
        <img className="activator" src={image_path} alt="" />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <b>Цена: {price} руб.</b>
      </div>
      <div className="add-to-cart" onClick={handleAddToCart}>
        +
      </div>
      <div className="remove" onClick={() => removeFromCart(props)}>
        -
      </div>
    </div>
  );
}
