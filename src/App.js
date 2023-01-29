

import Header from './Components/Header';
import InputCurrency from "./Components/Currencies/Input";
import SelectCurrency from "./Components/Currencies/SelectCurrency";
import ButtonCurrency from "./Components/Button/ButtongetCuurency";
import Preloader from "./Components/Preloader/loader";
import AddPositiveValueOfTheNumber from "./Components/Currencies/addPositiveValueOfTheNumber";
import Currencies from "./Components/Services/FetchCurrencies";

function App() {
  return (
    <div className="App">
    <Header />
   <Currencies/>

    <InputCurrency/>
    <SelectCurrency/>
    <ButtonCurrency/>
    <Preloader/>
    <AddPositiveValueOfTheNumber/>
    </div>
  );
}

export default App;
