const ratesUrl =
  "https://api.nbp.pl/api/exchangerates/tables/A/?format=json%22";

const getCurrencies = async () => {
  const response = await fetch(ratesUrl);
  const data = await response.json();
  return data;
};

export default getCurrencies;
