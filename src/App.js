
import './App.css';
import Header from './Components/Header';
import Select from "./Components/Option-currency";
import ResultGetCurrency from "./Components/Get-currency";

function App() {
  return (
    <div className="App">
    <Header />
    <Select />
    <ResultGetCurrency/>
    </div>
  );
}

export default App;
