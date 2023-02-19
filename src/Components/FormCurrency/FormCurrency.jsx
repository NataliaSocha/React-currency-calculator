import React, { useState } from "react";
import getCurrencies from "../../Services/getCurrencies";
import Input from "../Input/Input";
import SelectCurrency from "../SelectCurrency/SelectCurrency";
import Button from "../Button/Button";
import Preloader from "../Preloader/Loader";
import Result from "../Result/Result";

const initialState = "wybierz walutę";

function FormCurrency() {
  const [selectValue, setSelectValue] = useState(initialState);
  const [currencyNumber, setCurrencyNumber] = useState("");
  const [showResult, setShowResult] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleChangeInput = (e) => {
    setCurrencyNumber(e.target.value);
  };

  const setResultCurrencies = () => {
    if (currencyNumber <= 0 || currencyNumber === " ") {
      setShowResult("dodaj wartość dodatnią");
    } else if (selectValue === "wybierz walutę") {
      setShowResult("wybierz walutę");
    } else {
      setCurrencies();
    }
  };

  const setCurrencies = async () => {
    setLoading(true);
    try {
      const res = await getCurrencies();
      const ratesAll = res[0].rates;
      const currRate = ratesAll.find((item) => item.code === selectValue);
      const result = `${(currencyNumber * currRate.mid).toFixed(2)}  PLN`;
      setShowResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    setResultCurrencies();
  };

  return (
    <>
      <div className="content">
        <Input
          currencyNumber={currencyNumber}
          handleChangeInput={handleChangeInput}
        />
        <SelectCurrency handleChange={handleChange} selectValue={selectValue} />
      </div>
      <Button handleClick={handleClick} />
      <Preloader isLoading={isLoading} />
      <Result result={showResult} />
    </>
  );
}

export default FormCurrency;
