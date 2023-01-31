import Header from "./Components/Header";
import FormCurrency from "./Components/FormCurrency";
import Preloader from "./Components/Preloader/loader";
import AddPositiveValueOfTheNumber from "./Components/Currencies/addPositiveValueOfTheNumber";
import Currencies from "./Components/Services/FetchCurrencies";

function App() {
  return (
    <div className="App">
      <Header />
      <Currencies />
      <Preloader />
      <FormCurrency />
      <AddPositiveValueOfTheNumber />
    </div>
  );
}

export default App;
