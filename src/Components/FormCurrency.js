import React from "react";
import InputCurrency from "./Input";
import SelectCurrency from "./Currencies/SelectCurrency";
import ButtonCurrency from "./Button/ButtongetCuurency";
import { useState } from "react";

function FormCurrency() {
  const initialState = "USD";
  const [selectValue, setSelectValue] = useState(initialState);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    console.log(e);
  };
  //dataState.find((item) => item.code === selectValue);

  //setCurrencyNumber(currencyNumber);
  //const Result=  (({ currencyNumber } * datastate.mid).toFixed(2) + " " + "PLN");
  return (
    <>
      <SelectCurrency handleChange={handleChange} selectValue={selectValue} />
      <InputCurrency />
      <ButtonCurrency />
    </>
  );
}

export default FormCurrency;
