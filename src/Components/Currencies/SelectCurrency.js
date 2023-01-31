import "../Services/FetchCurrencies";
import React from "react";

const initialState = "USD";

function SelectCurrency({ dataState, handleChange, selectValue }) {
  if (!dataState) return " ";
  return (
    <div className="content">
      <select
        id="currencyValue"
        className="form-select"
        aria-label="Default select example"
        value={selectValue}
        onChange={(e) => {
          console.log(e);
          return handleChange(e);
        }}
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
