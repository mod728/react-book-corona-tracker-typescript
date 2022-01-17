import { ListType } from "../types";
import axios from 'axios';





const List = ({workingData,setOther,Senddata }: ListType) => {


  return (
    
    <div className="container">
      
      <form >
        <div  className="text-end"><input type="submit" className="btn btn-primary" value="　更新　"/></div><br />
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th>日</th>
              <th>曜</th>
              <th>開始時刻</th>
              <th>終了時刻</th>
              <th>休憩時間</th>
              <th>作業時間</th>
              <th>備考</th>
            </tr>
            </thead>
          <tbody>
            {workingData.map((singleData, index) =>
            
              <tr key={index} >
                {singleData.start&&<td><label >{singleData.day}</label></td>}
                {singleData.start&&<td><label > {singleData.weekday}</label></td>}
                {singleData.start&&<td><input type="text" className="form-control" name="3" value={singleData.start}/></td>}
                {singleData.start&&<td><input type="text" className="form-control" name="2" value={singleData.end}/></td>}
                {singleData.start&&<td><input type="text" className="form-control" name="2" value={singleData.halftime}/></td>}
                {singleData.start&&<td><input type="text" className="form-control" name="2" value={singleData.worktime}/></td>}
                {singleData.start&&<td><input type="text" className="form-control"  name="1" onChange={Senddata} defaultValue={singleData.other}/></td>}
              </tr>
            )} 
            
          </tbody>
       </table>
      </form>
    

    </div>
    
  );

};
export default List;
