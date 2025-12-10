// import './App.css'
import { useState } from "react";
import CitySelector from "./components/CitySelector/CitySelector.jsx";
import CityCard from "./components/CityCard/CityCard.jsx";

function App() {
  const [city, setCity] = useState("");
  return (
    <>
      <CitySelector setCity={setCity} />
      <CityCard city={city} />
    </>
  );
}

export default App;
