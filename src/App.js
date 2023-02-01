import Header from "./Components/Header";
import FormCurrency from "./Components/FormCurrency";
import Preloader from "./Components/Preloader/loader";
import AddPositiveValueOfTheNumber from "./Components/Currencies/addPositiveValueOfTheNumber";

function App() {
  return (
    <div className="App">
      <Header />

      <Preloader />
      <FormCurrency />
      <AddPositiveValueOfTheNumber />
    </div>
  );
}

export default App;
