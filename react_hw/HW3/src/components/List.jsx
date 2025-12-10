import { useState } from "react";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  const handleDelete = (id) => {
    setPeople(people.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h1>People List</h1>
      <ul>
        {people.map((item) => {
          return (
            <>
              <li key={item.id}>
                Name: {item.name}, Age: {item.age}
              </li>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
