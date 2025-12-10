import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";

function App() {
  const names = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Charmander" },
    { id: 3, name: "Squirtle" },
    { id: 4, name: "Pikachu" },
    { id: 5, name: "Jigglypuff" },
    { id: 6, name: "Gengar" },
    { id: 7, name: "Snorlax" },
    { id: 8, name: "Mewtwo" },
    { id: 9, name: "Dragonite" },
    { id: 10, name: "Eevee" },
  ];
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Kivi" },
    { id: 4, name: "Pineapple" },
    { id: 5, name: "Watermelon" }
  ];

  const orders = [
    {orderId: 1, status: 'processed'},
    {orderId: 2, status: 'delivered'},
    {orderId: 3, status: 'delivered'},
    {orderId: 4, status: 'delivered'},
    {orderId: 5, status: 'delivered'},
    {orderId: 6, status: 'on the way'},
    {orderId: 7, status: 'processed'},
    {orderId: 8, status: 'processed'}
  ]

  return (
    <>
      <h2>Greetings</h2>
      <div>
          {names.map((name) => (
            <Greeting key={name.id} name={name.name} />
          ))}
      </div>
      <h2>ShoppingList</h2>
      <ShoppingList items={items}/>
      <OrderStatus orders={orders} />
    </>
  );
}

export default App;
