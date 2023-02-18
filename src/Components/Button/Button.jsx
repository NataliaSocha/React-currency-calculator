function Button({ handleClick, id }) {
  return (
    <div className="container">
      <button id={id} className="getCurrencies" onClick={handleClick}>
        przelicz
      </button>
    </div>
  );
}

export default Button;
