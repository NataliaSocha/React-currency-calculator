function SelectCurrency({ dataState, handleChange, selectValue }) {
  return (
    <select
      id="currencyValue"
      className="form-select"
      aria-label="Default select example"
      value={selectValue}
      onChange={handleChange}
    >
      <option selected>wybierz walutę</option>
      {dataState
        .filter((item) => ["USD", "EUR", "CHF"].includes(item.code))
        .map((item) => (
          <option key={item.code} value={item.code}>
            <span className="currency">{item.code} 💵</span>
          </option>
        ))}
    </select>
  );
}

export default SelectCurrency;
