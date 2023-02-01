import "../Services/FetchCurrencies";
import React from "react";

function SelectCurrency({ dataState, handleChange, selectValue }) {
  if (!dataState) return " ";
  return (
    <div className="content">
      <select
        id="currencyValue"
        className="form-select"
        aria-label="Default select example"
        value={selectValue}
        onChange={handleChange}
      >
        {dataState
          .filter((item) => ["USD", "EUR", "CHF"].includes(item.code))
          .map((item) => (
            <option key={item.code} value={item.code}>
              <span className="currency">{item.code}</span>
            </option>
          ))}
      </select>
    </div>
  );
}
export default SelectCurrency;
