import { addProductToCart } from "../features/productSlice";
import { useDispatch } from "react-redux";

export default function ShopCard(props) {
  const { id, name, price, image_path, description, onAdd, removeFromCart } =
    props;

  const dispatch = useDispatch();

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
      <div
        className="add-to-cart"
        onClick={() =>
          dispatch(
            addProductToCart({
              id: props.id,
              name: props.name,
              price: props.price,
              image_path: props.image_path,
            })
          )
        }
      >
        +
      </div>
      <div className="remove" onClick={() => removeFromCart(props)}>
        -
      </div>
    </div>
  );
}

//      <div className="add-to-cart" onClick={() => onAdd(props)}>
