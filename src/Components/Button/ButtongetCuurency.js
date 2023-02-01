import React from "react";

function ButtonCurrency({ handleClick, id }) {
  return (
    <button id={id} className="getCurrencies" onClick={handleClick}>
      przelicz
    </button>
  );
}
export default ButtonCurrency;
