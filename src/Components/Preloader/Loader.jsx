const Preloader = ({ isLoading }) => {
  return isLoading ? (
    <div className="container">
      {" "}
      <div id="loader" className="loader"></div>{" "}
    </div>
  ) : (
    <></>
  );
};

export default Preloader;
