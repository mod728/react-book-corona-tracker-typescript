import Header from "../components/Header"; 
import Title from "../components/Title";
import Card from "../components/Card";  
import { WorldPageType } from "../types";

const WorldPage = ({ allCountriesData }: WorldPageType) => {
    return (
        <div className="world-page-container">
            <Header />
            <Title />
            <Card allCountriesData={allCountriesData} />
        </div>
    );
};

export default WorldPage;