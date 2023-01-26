
import {useState, useEffect } from "react";
import fetchData from "./../Services/ApiCurrencies";

/*btn.addEventListener("click", () => {
    
  });*/
  const Currencies = () => {
    useEffect(() => {
        fetchData(
            "https://api.nbp.pl/api/exchangerates/tables/A/?format=json%22"
          ).then((data) => {
            const cash = data[0].rates;
            const selectList = document.querySelector(".form-select");
            const input = document.querySelector("#inputCurrency");
            const addPositiveValue = document.querySelector(
              "#negativeValueOfTheNumber"
            );
            if (input.value < 0) {
              return (addPositiveValue.innerHTML = "wpisz wartość dodatnią");
            }
            const selectedCurrency = cash.find(
              (item) => item.code === selectList.value
            );
            addPositiveValue.innerHTML =
              (selectedCurrency.mid * input.value).toFixed(2) + " " + "PLN";
          })
    }, [fetchData]);
    return (
        <section>
        <div class="content">
        <input id="inputCurrency" class= "inputCurrency" type="number" placeholder="wpisz kwotę" />
        <select
        id="currencyValue"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected>wybierz walutę</option>
        <option value="USD"><span class="currency">USD</span>💵</option>
        <option value="EUR"><span class="currency">EUR</span>💶</option>
        <option value="CHF"><span class="currency">CHF</span>💴</option>
      </select>
    </div>;
    </section>
    )
  };
  export default Currencies;