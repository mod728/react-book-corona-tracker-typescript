const Selector = (props) => {
    return (
        <div className="selector-container">
            <select onChange={(e) => props.setCountry(e.target.value)}> 
                <option>Select A Country</option>    
                {props.countriesJson.map((country, index) => 
                   <option key={index} value={country.Slug}>{country.Country}</option>
                )}      
            </select> 
            <button onClick={props.getCountryData}>Get Data</button>
        </div>
    );
};

export default Selector;