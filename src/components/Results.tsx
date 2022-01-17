import Loading from "./Loading"; 
import { ResultsType } from "../types";	

const Results = ({ countryData }: ResultsType) => {
    const { date, weekday, totalConfirmed, start, totalRecovered } = countryData;
    return (
        <div className="results-container">
            
        </div>
    );
};

export default Results;