import "../Services/FetchCurrencies";

function SelectCurrency(props){
    const {datastate} = props
    
    return (
        <div>
    <select id="currencyValue" className="form-select" aria-label="Default select example">
        {datastate.map(item=> (
          <option key = {item.code} value={item.code}>
            <span className="currency">{item.code}</span>💵</option> ) )}
        <option >wybierz walutę</option>
        
  
    </select>
    </div>
   ) }
   export default SelectCurrency;