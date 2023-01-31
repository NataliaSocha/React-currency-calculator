const url = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json%22";

const fetchCurrencies = fetch(url)
  .then((resp) => resp.json())
  .then((res) => res[0].rates)
  .catch((err) => console.log(err));

export { fetchCurrencies };

/*import { useConnections } from "react";
import { useCallback } from "react";
  async function loadData() {
    //preloaderOn();
    try {
      const data = await fetch(
        "https://api.nbp.pl/api/exchangerates/tables/A/?format=json%22"
      );
      return await data.json();
      /*const json = await data.json();
      setDataState(json);*/
//}
//catch (err) {
/*  console.error(err);
    } */
/*finally {
      preloaderOff();
    }  
  }*/
/* const FetchData = ()=>{
    const { makeRequest } = useConnections();

    const callback = useCallback(async()=>
    {
        const response = await loadData();
        return { body: response.body };
    }
    , [makeRequest])
    return {callback};
   } 
  
  export default FetchData;*/
