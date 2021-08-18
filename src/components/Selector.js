const Selector = ({ setCountry, countriesJson }) => {
    return (
        <div className="selector-container">
            <select onChange={(e) => setCountry(e.target.value)}>  
                {countriesJson.map((country, index) => 
                   <option key={index} value={country.Slug}>{country.Country}</option>
                )}      
            </select> 
        </div>
    );
};

export default Selector;