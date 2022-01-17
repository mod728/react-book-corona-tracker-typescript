import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { SelectorType } from '../types';

type Data = {
   day: string;
   weekday: string
 }
 export const Selector = ({setDatas,datas}:SelectorType) => {
   const urlAPI = "http://localhost:8080/login?email=ryowhite@icloud.com&password=0000";
   
   console.log(axios.defaults.baseURL)
   useEffect( () => {
     axios.get(urlAPI).then((res)=> {
       setDatas(res.data);
     })
   },[])
   console.log(datas)
   
   return (
     <div className="App">
       <h1>Axios Test</h1>
       <div>
         {datas.map((data: Data) => (
           <div>{data.weekday} : {data.day}</div>
         ))}
       </div>
     </div>
   );
         }
export default Selector