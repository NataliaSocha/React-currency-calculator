function InputCurrency({ currencyNumber, setCurrencyNumber }) {
  return (
    <input
      id="inputCurrency"
      className="inputCurrency"
      type="number"
      placeholder="wpisz kwotę"
      onChange={(e) => setCurrencyNumber(e.target.value)}
      value={currencyNumber}
    />
  );
}
export default InputCurrency;
