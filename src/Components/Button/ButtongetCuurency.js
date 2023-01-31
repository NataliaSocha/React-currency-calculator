function ButtonCurrency({ handleClick, id }) {
  //dataState.find((item) => item.code === selectValue);
  function handleClick() {
    //setCurrencyNumber(currencyNumber);
    //const Result=  (({ currencyNumber } * datastate.mid).toFixed(2) + " " + "PLN");
  }
  return (
    <button id={id} className="getCurrencies" onClick={handleClick}>
      przelicz
    </button>
  );
}
export default ButtonCurrency;
