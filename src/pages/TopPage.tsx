import Header from "../components/Header"; 
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";
import { TopPageType } from "../types";

const TopPage = ({ countriesJson, setCountry, countryData, loading }: TopPageType) => {
    return (
        <div className="top-page-container">
            <div>
                <Header />
                <Title />
                <Selector countriesJson={countriesJson} setCountry={setCountry} />
                <Results countryData={countryData} loading={loading} /> 
            </div>
        </div>
    );
};

export default TopPage;