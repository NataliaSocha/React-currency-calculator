import React, { useState, useEffect } from "react";
import InputCurrency from "./Input";
import SelectCurrency from "./Currencies/SelectCurrency";
import ButtonCurrency from "./Button/ButtongetCuurency";
import { fetchCurrencies } from "./Services/ApiCurrencies";

const initialState = "USD";

function FormCurrency() {
  const [selectValue, setSelectValue] = useState(initialState);
  const [currencyNumber, setCurrencyNumber] = useState(0);
  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    fetchCurrencies.then((data) => {
      setDataState(data);
    });
  }, []);

  const handleChange = (e) => {
    console.log(e);
    setSelectValue(e.target.value);
  };

  const handleClick = () => {
    const currRate = dataState.find((item) => item.code === selectValue);
    const result = `${(currencyNumber * currRate.mid).toFixed(2)}  PLN`;
    console.log("result,", result);
  };

  //dataState.find((item) => item.code === selectValue);

  //setCurrencyNumber(currencyNumber);
  //const Result=  (({ currencyNumber } * datastate.mid).toFixed(2) + " " + "PLN");
  return (
    <>
      <SelectCurrency
        handleChange={handleChange}
        selectValue={selectValue}
        dataState={dataState}
      />
      <InputCurrency
        currencyNumber={currencyNumber}
        setCurrencyNumber={setCurrencyNumber}
      />
      <ButtonCurrency handleClick={handleClick} />
    </>
  );
}

export default FormCurrency;
