import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage"; 
import ExamPage from "./pages/ExamPage";
import './App.css';
import { CountryDataType, workingDataType } from "./types";
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [datas, setDatas] = useState([]);
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  
  

  //日付とか曜日とかをStateに入れる箱がAll～でStateに書き込むメソッドがset～
  //AllCountriesDataTypeはallCountriesDataの型を規定している。
  //本来はStringが5つみたいな感じになる
  const [workingData, setworkingData] = useState<workingDataType>([{
    day: "",		
    weekday: "",			
    other:	"",	
    start:"",	
    end:"",
    halftime:"",
    worktime:"",
  }]);

  //useEffect is 何
  //useEffectを使うと、useEffectに渡された関数はレンダーの結果が画面に反映された後に動作します。
  //つまりuseEffectとは、「関数の実行タイミングをReactのレンダリング後まで遅らせるhook」です
  //→お前何言ってんの？
  //レンダリング・レンダー　→もとになる情報を整形して表示すること
  //元記事: 『現在のPropsとStateを元に、Reactがコンポーネントに対して、それらがどのように見えるべきなのかを尋ねるプロセスです』
  //ReactコンポーネントからDOMノードを作成するための情報（StateやPropsの値含む）の読み込みを行うこと
  //つまりuseEffectは画面を表示する情報を受け取った後に関数を実行するってこと？
  //『useEffectは画面が描写された後に実行されるということが重要なのでそれもしっかりと覚えておいてください』
  //hook is 何
  //状態管理などのReactの機能を、クラスを書かずに使えるようになる機能
  //まあザックリstateとか今回のuseEffectみたいなreactの独自機能だと思っておけばいいんじゃない
 


  const getList=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    fetch(`http://localhost:8080/login?email=${email}&password=${password}`,{mode: 'cors'})
    .then(res => res.json())
    .then(data => setworkingData(data))
    //.catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。")); 
    //console.error()
  
  }
  
  //基本はjsonで送ってるものだと考えるとよろしい
  const getList2=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    let params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    axios
    .post('http://localhost:8080/login',  params )//params 予約語 これで固定
      .then(res => setworkingData(res.data))
    
    
    
    .catch(err => {
        console.log('err:', err);
    });
  }

 const[other,setOther]= useState<string>(" ");

 const[inputValue,setinputValue]= useState<string>("");
  


 const Senddata=(e: React.ChangeEvent<HTMLInputElement>)=>{
    let changeOther: string = e.target.value;
    console.log(changeOther)
    e.preventDefault();
    let params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    params.append('other',changeOther)
    

    axios
    .post(
      'http://localhost:8080/reactAjax',  params )//params 予約語 これで固定
      .then(res => setworkingData(res.data))
      .catch(err => {
        console.log('err:', err);
      }
    );
  }


  /*useEffect(() => {
    const Senddata2=(e: React.FormEvent<HTMLFormElement>)=>{
      console.log(other)
      e.preventDefault();
      let params = new URLSearchParams();
      params.append('email', email);
      params.append('password', password);
      params.append('other',other)
      axios
      .post(
        'http://localhost:8080/reactAjax',  params )//params 予約語 これで固定
        .then(res => setworkingData(res.data))
        .catch(err => {
          console.log('err:', err);
        }
      );
    }
    
  }, [workingData])//Stateにいるcountryが変更された場合のみ↑の処理を行う合図
  *  /


 /*const test=(e: React.FormEvent<HTMLFormElement>)=>{
   
  e.preventDefault();
  //singleData.other=e.target.value;
  setOther(e.target.value)
  console.log(other)
  let params = new URLSearchParams();
  params.append('email', email);
  params.append('password', password);
  params.append('other',other)
  
  axios
  .post(
    
    'http://localhost:8080/reactAjax',  params )//params 予約語 これで固定
    .then(res => setworkingData(res.data))
  
  
  
  .catch(err => {
      console.log('err:', err);
  });
}

 */


  const Mail=()=>{
    console.log("uuuuu")
    fetch(`http://localhost:8080/reactmail?email=${email}&password=${password}`,{mode: 'cors'})
  }

  const Excel=()=>{
    console.log("eeee")
    fetch(`http://localhost:8080/reactExcel?email=${email}&password=${password}`,{mode: 'cors'})
  }


  return (
    <BrowserRouter>   
      <Switch>        
        <Route exact path="/world">    
          <ExamPage countriesJson={countriesJson} setDatas={setDatas}  datas={datas}/>
        </Route>  
        
        <Route exact path="/">  
          <TopPage setworkingData={setworkingData}
                   other={other} 
                   email={email}  
                   Senddata={Senddata} 
                   password={password}
                   Excel={Excel} 
                   Mail={Mail} 
                   getList2={getList2} 
                   workingData={workingData} 
                   setEmail={setEmail} 
                   setPassword={setPassword} 
                   setOther={setOther}
                   
                   />            
        </Route>      
      
      </Switch>       
    </BrowserRouter>   
  );
}

export default App;
