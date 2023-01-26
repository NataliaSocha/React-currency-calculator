
import './App.css';
import Header from './Components/Header';
import Select from "./Components/Option-currency";
import ResultGetCurrency from "./Components/Get-currency";
import Currencies from './Components/Services/FetchCurrencies';


function App() {
  return (
    <div className="App">
    <Header />
    <Select />
    <ResultGetCurrency/>
    <Currencies/>
    
    </div>
  );
}

export default App;
