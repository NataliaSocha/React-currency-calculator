import Header from "./Components/Header";
import FormCurrency from "./Components/FormCurrency";
import Preloader from "./Components/Preloader/Loader";
import ResultAndAddPositiveValueOfTheNumber from "./Components/Currencies/ResultAndaddPositiveValueOfTheNumber";
function App() {
  return (
    <div className="App">
      <Header />
      <FormCurrency />
      <Preloader />
      <ResultAndAddPositiveValueOfTheNumber />
    </div>
  );
}

export default App;
