import './App.css'
import { useState } from "react";
import CitySelector from "./components/CitySelector/CitySelector.jsx";
import CityCard from "./components/CityCard/CityCard.jsx";

function App() {
  const [city, setCity] = useState(null);
  return (
    <div className="app_container">
      <CitySelector setCity={setCity} />
      <CityCard city={city} />
    </div>
  );
}

export default App;
