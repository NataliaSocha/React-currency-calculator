/*import axios from "axios";*/

const ratesUrl =
  "https://api.nbp.pl/api/exchangerates/tables/A/?format=json%22";

/*async function getCurrencies() {
  const response = await axios(ratesUrl);
  return response;
}*/

const getCurrencies = async () => {
  const response = await fetch(ratesUrl);
  const data = await response.json();
  return data;
};

export default getCurrencies;
