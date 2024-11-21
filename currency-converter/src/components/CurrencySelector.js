import React, { useContext } from "react";
import CurrencyContext from "../context/CurrencyContext";
import styles from "../styles/CurrencySelector.module.css";

function CurrencySelector() {
  const { baseCurrency, setBaseCurrency } = useContext(CurrencyContext);
  const { targetCurrency, setTargetCurrency } = useContext(CurrencyContext);
  const { amount, setAmount } = useContext(CurrencyContext);

  function handleChangeBaseCurrency(event) {
    setBaseCurrency(event.target.value);
  }

  function handleChangeTargetCurrency(event) {
    setTargetCurrency(event.target.value);
  }

  function handleChangeAmount(event) {
    setAmount(Number(event.target.value));
  }

  function switchCurrencies() {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <input
          type="number"
          name="amount"
          onChange={handleChangeAmount}
          value={amount}
        />

        <select
          name="base"
          value={baseCurrency}
          onChange={handleChangeBaseCurrency}
        >
          <option value={"USD"}>USD</option>
          <option value={"EUR"}>EUR</option>
          <option value={"RUB"}>RUB</option>
        </select>
      </div>
      <button onClick={switchCurrencies}>
        <div className={styles.arrowIcon}></div>
      </button>
      <select
        name="target"
        value={targetCurrency}
        onChange={handleChangeTargetCurrency}
      >
        <option value={"USD"}>USD</option>
        <option value={"EUR"}>EUR</option>
        <option value={"RUB"}>RUB</option>
      </select>
    </div>
  );
}

export default CurrencySelector;
