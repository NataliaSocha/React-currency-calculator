import axios from "axios";

const ratesUrl =
  "https://api.nbp.pl/api/exchangerates/tables/A/?format=json%22";

async function ApiCurency() {
  const response = await axios(ratesUrl);
  return response;
}
export default ApiCurency;
