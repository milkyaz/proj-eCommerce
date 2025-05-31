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
      {/* <div className="card-action">
        <button className="btn-small">Купить</button>
        <button className="btn-small right">Больше</button>
      </div> */}
    </div>
  );
}


const App = () => {
const [tasks, set Tasks] = use State<To Do List Props[]>([]);
const handle]Tasks = (e: KeyboardEvent) => {
if (e.key === 'r') {
const tasks = fetch Tasks();
setTasks(tasks);
};
use Layout Effect(() => {
document.addEventListener('keydown', handler Get Tasks);
D;
return (
<>
<h1>Ежедневный список дел:</h1>
<ToDoList
items={[
{ id: '1', text: 'Полить цветы' },
{ id: '2', text: 'Вынести мусор' },
{ id: '3', text: 'Погулять с собакой' },
J}
/>
<h2>Список дел на сегодня:</h2>
<ToDoList items={tasks} />
</>
export default App;