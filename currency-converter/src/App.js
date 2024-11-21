import React from "react";
import "./App.css";
import { CurrencyContextProvider } from "./context/CurrencyContextProvider";
import CurrencyConverter from "./components/CurrencyConverter";
import CurrencySelector from "./components/CurrencySelector";
import "./styles/Globals.css";

function App() {
  return (
    <div className="container">
      <CurrencyContextProvider>
        <h1>Конвертер валюты</h1>
        <CurrencySelector />
        <CurrencyConverter />
      </CurrencyContextProvider>
    </div>
  );
}
export default App;
