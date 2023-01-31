import { useState } from "react";

function InputCurrency() {
  const [currencyNumber, setCurrencyNumber] = useState(0);

  return (
    <div className="content">
      <input
        id="inputCurrency"
        className="inputCurrency"
        type="number"
        placeholder="wpisz kwotę"
        onChange={(e) => setCurrencyNumber(e.target.value)}
        value={currencyNumber}
      />
    </div>
  );
}
export default InputCurrency;
