import React, { useState } from "react";
import CurrencyContext from "./CurrencyContext";

export function CurrencyContextProvider({ children }) {
  const exchangeRates = {
    USD: { EUR: 0.93, RUB: 99.85 },
    EUR: { USD: 1.07, RUB: 107.68 },
    RUB: { USD: 0.01, EUR: 0.0093 },
  };

  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("RUB");
  const [amount, setAmount] = useState(1);

  return (
    <CurrencyContext.Provider
      value={{
        exchangeRates,
        baseCurrency,
        targetCurrency,
        amount,
        setBaseCurrency,
        setTargetCurrency,
        setAmount,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}
