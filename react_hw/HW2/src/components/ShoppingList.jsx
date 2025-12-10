function ShoppingList({ items }) {
  let result = <p>Shopping list is empty</p>;
  if (items.length > 0) {
    result = (
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    );
  }
  return result;
}

export default ShoppingList;
