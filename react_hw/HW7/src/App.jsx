import { useState } from "react";
import "./App.css";
import LangContext from './context/LangContext'
import SwitchLanguage from "./components/SwitchLanguage";
import Text from "./components/Text";

function App() {
  const [lang, setLang] = useState("English");

  const switchLang = () => {
    setLang((prevLang) => (prevLang === "English" ? "Russian" : "English"));
  };

  return (
    <div className="app_container">
      <LangContext.Provider value={{ lang, switchLang }}>
        <Text />
        <SwitchLanguage />
      </LangContext.Provider>
    </div>
  );
}

export default App;
