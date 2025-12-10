import { useEffect, useState } from "react";
import style from './ListItems.module.css'

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
       console.log("Компонент ListItems обновлен");
     }, []);

  const addItem = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    setItems((prevInputValue) => [...prevInputValue, inputValue]);
    setInputValue("");
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={addItem}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={style.btn} type="submit">add item</button>
      </form>
      <ul>
        {items.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
