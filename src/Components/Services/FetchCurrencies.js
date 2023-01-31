import { useEffect, useState } from "react";
import { fetchCurrencies } from "./ApiCurrencies";
import SelectCurrency from "../Currencies/SelectCurrency";

const Currencies = () => {
  const [dataState, setDataState] = useState([]);
  console.log("dataState", dataState);

  useEffect(() => {
    fetchCurrencies.then((data) => {
      setDataState(data);
    });
  }, []);
  return (
    <div>
      <SelectCurrency dataState={dataState} />
    </div>
  );
};

export default Currencies;

/*import FetchData from "./ApiCurrencies";
import {useState, useEffect } from "react";

export default function Currencies (){
    const [datastate, setDataState] = useState([])
    
useEffect(() => {
    const { callback } = FetchData();
    callback(
      ).then((data) => {
        
        setDataState(data[0].rates);
        console.log(datastate);
      });
}, []);

}*/

/*function CurrencyInput(props){
           return(
            <section>
     <div className="content">
        <input id="inputCurrency"value={props.amount}
        className= "inputCurrency" type="number" placeholder="wpisz kwotę" />
      
      <select id="currencyValue"
        className="form-select"
        aria-label="Default select example" value= {props.currency}>
            <option selected>wybierz walutę</option>
            {props.currency.map((currency=>(
                <option value={currency}><span className="currency">USD</span>💵</option>
            )))}    
    </select>
    </div>  
  </section>
           ) 
        } 
       /*<option value="USD"><span className="currency">USD</span>💵</option>
       <option value="EUR"><span className="currency">EUR</span>💶</option>
       <option value="CHF"><span className="currency">CHF</span>💴</option> */

/*const selectList = document.querySelector(".form-select");
const input = document.querySelector("#inputCurrency");
const addPositiveValue = document.querySelector(
  "#negativeValueOfTheNumber"
);
if (input.value < 0) {
  return (addPositiveValue.innerHTML = "wpisz wartość dodatnią");
}
const selectedCurrency = {datastate}.find(
  (item) => item.code === selectList.value
);
addPositiveValue.innerHTML =
  (selectedCurrency.mid * input.value).toFixed(2) + " " + "PLN";
  
  )
}  
export default Currencies
/*}
  btn.addEventListener("click", () => {
    loadData(
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
    });
  });
  

*/

/*btn.addEventListener("click", () => {
    
  });*/
/*const Currencies = () => {
    const [data, setData] = useState();
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
  export default Currencies;*/
