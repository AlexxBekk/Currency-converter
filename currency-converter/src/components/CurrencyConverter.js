import React, { useContext, useEffect, useState } from "react";
import CurrencyContext from "../context/CurrencyContext";
import styles from "../styles/CurrencyConverter.module.css";

function CurrencyConverter() {
  const { amount, baseCurrency, targetCurrency, exchangeRates } =
    useContext(CurrencyContext);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const rate = exchangeRates[baseCurrency]?.[targetCurrency] || 1;
    setConvertedAmount(() => rate * amount);
  }, [amount, baseCurrency, targetCurrency]);

  return (
    <div className={styles.wrapper}>
      <h2>Результат:</h2>
      <p>
        {convertedAmount} {targetCurrency}
      </p>
    </div>
  );
}

export default CurrencyConverter;
