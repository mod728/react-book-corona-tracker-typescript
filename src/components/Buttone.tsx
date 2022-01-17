import { ButtoneType } from "../types";
const Buttone=({password, Excel, Mail}:ButtoneType)=>{
    return (
        <div>
        {password&&<button onClick={Excel}>勤怠表のExcel化</button>}
        {password&&<button onClick={Mail}>メール送信</button>}
        </div>
    );
};
export default Buttone;