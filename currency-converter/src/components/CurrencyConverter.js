import React, { useContext, useEffect } from "react";
import CurrencyContext from "../context/CurrencyContext";
import styles from "../styles/CurrencyConverter.module.css";

function CurrencyConverter() {
  const { amount, baseCurrency, targetCurrency, exchangeRates } =
    useContext(CurrencyContext);

  const rate = exchangeRates[baseCurrency]?.[targetCurrency] ?? 0;
  const convertedAmount = rate * amount;

  useEffect(() => {
    console.log(
      `Значения изменились.\nТекущие значения:\nAmount: ${amount}\nBase Currency: ${baseCurrency}\nTarget Currency: ${targetCurrency}\n `,
    );
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
