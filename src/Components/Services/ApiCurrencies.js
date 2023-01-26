  const fetchData = useCallback (async function loadData() {
    preloaderOn();
    try {
      const data = await fetch(
        "https://api.nbp.pl/api/exchangerates/tables/A/?format=json%22"
      );
      //return await data.json();
      const json = await data.json();
      setData(json);
    } 
    catch (err) {
      console.error(err);
    } 
    finally {
      preloaderOff();
    }   loadData();
  },[])
  export default fetchData;