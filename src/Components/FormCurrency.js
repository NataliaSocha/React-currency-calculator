import React, { useState, useEffect } from "react";
import ApiCurency from "./Services/ApiCurrency";
import InputCurrency from "./Input";
import SelectCurrency from "./Currencies/SelectCurrency";
import ButtonGetCurrency from "./Button/ButtonGetCurrency";
import Preloader from "./Preloader/Loader";
import AddPositiveValueOfTheNumber from "./Currencies/ResultAndaddPositiveValueOfTheNumber";

const initialState = "EUR";

function FormCurrency() {
  const [selectValue, setSelectValue] = useState(initialState);
  const [currencyNumber, setCurrencyNumber] = useState(" ");
  const [dataState, setDataState] = useState([]);
  const [showResult, setShowResult] = useState(" ");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    ApiCurency().then((res) => setDataState(res.data[0].rates));
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleClick = () => {
    setLoading(true);
    if (currencyNumber < 0) {
      setShowResult("dodaj wartość dodatnią");
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        const currRate = dataState.find((item) => item.code === selectValue);
        const result = `${(currencyNumber * currRate.mid).toFixed(2)}  PLN`;
        setShowResult(result);
      }, 2000);
    }
  };

  return (
    <>
      <div className="content">
        <InputCurrency
          currencyNumber={currencyNumber}
          setCurrencyNumber={setCurrencyNumber}
        />
        <SelectCurrency
          handleChange={handleChange}
          selectValue={selectValue}
          dataState={dataState}
        />
      </div>
      <ButtonGetCurrency handleClick={handleClick} />
      <Preloader isLoading={isLoading} />
      <AddPositiveValueOfTheNumber result={showResult} />
    </>
  );
}

export default FormCurrency;
