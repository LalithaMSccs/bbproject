import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
import { useContext} from "react";
import Usercontext from "./context";
function Withdraw(){
    let ctx=useContext(Usercontext);
    const [withdraw,setWithdraw]=useState();
    const [show ,setShow]=useState(true);
    let index=0; 
    let bal=0;
    for(let i=0;i<ctx.currentUser.length;i++){
        index=ctx.users.findIndex(user=>user.email===ctx.currentUser[i].email)
        bal=ctx.currentUser[i].balance;
        
    } 
    console.log('Currentuser',ctx.currentUser);
    const [avabalance,setAvabalance]=useState(bal); 
    let balan=0;
    function submit(e){
        e.preventDefault();
        if(!withdraw){
            alert('Enter the amount');
            return;
        }
        if(Number(withdraw)<0){
            alert('No negative amount accepted');
            setWithdraw('');
            return;
        }
        if(Number(withdraw)>avabalance){
            alert('Higher than balance');
            setWithdraw('');
            return;
        }
        let date=new Date().toLocaleString();
        let amount=Number(withdraw);
        balan=bal-amount;
        setAvabalance(balan);
        ctx.users[index].balance=balan;
        console.log("Balnce after withdraw ",balan);
        setShow(false);
        alert("Successfully Withdraw Rs."+withdraw+" for "+ctx.users[index].name+" on "+ date);
    }
    function rewithdraw(){
        setWithdraw("");
        setShow(true);
    }
        return(
        <>
        <div className="app">
            <div id="balance">
                <h2>Balance:</h2>
                <h4>{avabalance}</h4>

            </div>
            <div className="login-form">
                <div className="title">Withdraw</div>
                <div className="form">
                    
                    {show ?
                    <form>
                        <div className="input-container">
                            <input type="text" name="uname" required placeholder="Enter the amount" value={withdraw} onChange={e=>setWithdraw(e.target.value)}  />
                        </div>
        
                        <div className="button-container">
                            <button onClick={submit}>Withdraw</button>
                        </div>
                   </form>:
                        <div className="button-container">
                            <button onClick={rewithdraw}>Add another Withdraw</button>
                        </div>
                    } 
                </div>        
            </div>
        </div>
        </>
    );

}
export default Withdraw;