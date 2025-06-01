export default function ShopCard(props) {
  const { id, name, price, image_path, description, onAdd, removeFromCart } =
    props;
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
      <div className="add-to-cart" onClick={() => onAdd(props)}>
        +
      </div>
      <div className="remove" onClick={() => removeFromCart(props)}>
        -
      </div>
    </div>
  );
}
