import React from "react";
import { CurrencyContextProvider } from "./context/CurrencyContextProvider";
import CurrencyConverter from "./components/CurrencyConverter";
import CurrencySelector from "./components/CurrencySelector";
import "./App.css";
import "./styles/Globals.css";

function App() {
  return (
    <div className="container">
      <h1>Конвертер валюты</h1>
      <CurrencyContextProvider>
        <CurrencySelector />
        <CurrencyConverter />
      </CurrencyContextProvider>
    </div>
  );
}
export default App;
