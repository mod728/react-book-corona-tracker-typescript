import Title from "../components/Title";
import List from "../components/List";  
import Form from "../components/Form";  
import Buttone from "../components/Buttone";  
import { TopPageType } from "../types";





const TopPage = ({email,
                  setworkingData,
                  other,
                  password, 
                  Excel, 
                  Mail,
                  setPassword,
                  getList2,
                  workingData,
                  setEmail,
                  setOther,
                  
                  Senddata}: 
            TopPageType) => {
    return (
        <div className="world-page-container">
            
            <Title />
            <Form getList2={getList2} setEmail={setEmail} setPassword={setPassword}/>
            <List   Senddata={Senddata}setOther={setOther} workingData={workingData} />
            <Buttone  Excel={Excel} Mail={Mail} password={password} />
        </div>
    );
};

export default TopPage;