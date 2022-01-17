import Header from "../components/Header"; 
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";
import { ExamPageType } from "../types";

const ExamPage = ({ setDatas,datas }: ExamPageType) => {
    return (
        <div className="top-page-container">
            <div>
                <Header />
                <Title />
                <Selector setDatas={setDatas} datas={datas}  />
               
            </div>
        </div>
    );
};

export default ExamPage;