import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage"; 
import WorldPage from "./pages/WorldPage";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("japan");
  const [countryData, setCountryData] = useState({
    date: "",            
    newConfirmed: "",     
    totalConfirmed: "",   
    newRecovered: "",    
    totalRecovered: "",  
  });
  const [allCountriesData, setAllCountriesData] = useState([]);

  useEffect(() => {
    const getCountryData = () => {
        setLoading(true); 
        fetch(`https://api.covid19api.com/country/${country}`) 
        .then(res => res.json())
        .then(data => {
            setCountryData({
              date: data[data.length -1].Date,             
              newConfirmed: data[data.length -1].Confirmed - data[data.length -2].Confirmed,      
              totalConfirmed: data[data.length -1].Confirmed,    
              newRecovered:  data[data.length -1].Recovered- data[data.length -2].Recovered,    
              totalRecovered: data[data.length -1].Recovered,    
          });
          setLoading(false); 
        })
        .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));  
    }
    getCountryData();
  }, [country])

  useEffect(() => {  
      fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。")); 
  }, []); 
  return (
    <BrowserRouter>   
      <Switch>        
          <Route exact path="/">    
              <TopPage countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} loading={loading} />
          </Route>  
          <Route exact path="/world">  
              <WorldPage allCountriesData={allCountriesData} />            
          </Route>      
      </Switch>       
  </BrowserRouter>   
  );
}

export default App;
