export default function ShopCard(props) {
  const { id, name, price, image_path, description } = props;
  return (
    <div id={"product-" + id} className="card">
      <div>
        <img className="activator" src={image_path} alt="" />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <b>Цена: {price} руб.</b>
      </div>
      <div className="card-action">
        <button className="btn-small">Купить</button>
        <button className="btn-small right">Больше</button>
      </div>
    </div>
  );
}
