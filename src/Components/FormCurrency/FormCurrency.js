import React, { useState, useEffect } from "react";
import getCurrencies from "../../Services/getCurrencies";
import Input from "../Input/Input";
import SelectCurrency from "../Currencies/SelectCurrency";
import Button from "../Button/Button";
import Preloader from "../Preloader/Loader";
import Result from "../Result/Result";

const initialState = "wybierz walutę";

function FormCurrency() {
  const [selectValue, setSelectValue] = useState(initialState);
  const [currencyNumber, setCurrencyNumber] = useState(" ");
  const [dataState, setDataState] = useState([]);
  const [showResult, setShowResult] = useState(" ");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setCurrencies();
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleChangeInput = (e) => {
    setCurrencyNumber(e.target.value);
  };

  const setCurrencies = async () => {
    setLoading(true);
    try {
      const res = await getCurrencies();
      setDataState(res[0].rates);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const setResultCurrencies = () => {
    if (currencyNumber <= 0 || currencyNumber === " ") {
      setShowResult("dodaj wartość dodatnią");
    } else if (selectValue === "wybierz walutę") {
      setShowResult("wybierz walutę");
    } else {
      const currRate = dataState.find((item) => item.code === selectValue);
      const result = `${(currencyNumber * currRate.mid).toFixed(2)}  PLN`;
      setShowResult(result);
    }
  };

  const handleClick = () => {
    setCurrencies();
    setResultCurrencies();
  };

  return (
    <>
      <div className="content">
        <Input
          currencyNumber={currencyNumber}
          handleChangeInput={handleChangeInput}
        />
        <SelectCurrency
          handleChange={handleChange}
          selectValue={selectValue}
          dataState={dataState}
        />
      </div>
      <Button handleClick={handleClick} />
      <Preloader isLoading={isLoading} />
      <Result result={showResult} />
    </>
  );
}

export default FormCurrency;
