function Input({ currencyNumber, handleChangeInput }) {
  return (
    <input
      id="inputCurrency"
      className="inputCurrency"
      type="number"
      placeholder="wpisz kwotę"
      onChange={handleChangeInput}
      value={currencyNumber}
    />
  );
}
export default Input;
