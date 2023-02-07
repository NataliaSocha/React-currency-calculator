import React from "react";

function ButtonGetCurrency({ handleClick, id }) {
  return (
    <div className="container">
      <button id={id} className="getCurrencies" onClick={handleClick}>
        przelicz
      </button>
    </div>
  );
}

export default ButtonGetCurrency;
