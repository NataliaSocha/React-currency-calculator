function SelectCurrency({ handleChange, selectValue }) {
  return (
    <select
      id="currencyValue"
      className="form-select"
      aria-label="Default select example"
      value={selectValue}
      onChange={handleChange}
    >
      <option>wybierz walutę</option>
      {["USD", "EUR", "CHF"].map((code) => (
        <option key={code} value={code}>
          <span className="currency">{code} 💵</span>
        </option>
      ))}
    </select>
  );
}

export default SelectCurrency;
