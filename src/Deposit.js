import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
import { useContext,createContext } from "react";
import Usercontext from "./context";
function Deposit(){
    const[deposit,setDeposit]=useState();
    const [show,setshow]=useState(true);
    let ctx=useContext(Usercontext);
    let index=0; 
    let bal=0;
    for(let i=0;i<ctx.currentUser.length;i++){
        index=ctx.users.findIndex(user=>user.email===ctx.currentUser[i].email)
        bal=ctx.currentUser[i].balance;
    } 
    console.log('Currentuser',ctx.currentUser);
    const [avabalance,setAvabalance]=useState(bal);
    function submit(e){
        e.preventDefault();
        if(!deposit){
            alert('Enter the amount');
            return;
        }
        if(Number(deposit)<0){
            alert('No negative amount accepted');
            setDeposit('');
            return;
        }
        let date=new Date().toLocaleString();
        let dep=Number(deposit);
        let balance=bal+dep;
        setAvabalance(balance);
        ctx.users[index].balance=balance;
        console.log("Balance after deposited ",balance);
        setshow(false);
        alert("Successfully Deposited Rs."+deposit+" for "+ctx.users[index].name +" on "+date);
    }
    function redeposit(){
        setDeposit("");
        setshow(true);
    }
    
    return(
        <>
        <div className="app">
            <div id="balance">
                <h2>Balance:</h2>
                <h4>{avabalance}</h4>
            </div>
            <div className="login-form">
                <div className="title">Deposit</div>
                <div className="form">
                    {show ?
                    <form>
                        <div className="input-container">
                            <input type="text" name="uname" required placeholder="Enter the amount"  value={deposit} onChange={e=>setDeposit(e.target.value)}/>
                        </div>
                        <div className="button-container">
                            <button onClick={submit}>Deposit</button>
                        </div>
                    </form>:     
                        <div className="button-container">
                            <button onClick={redeposit}>Add Another Deposit</button>
                        </div>}
                    
                </div>        
            </div>
        </div>
        </>
    );

}
export default Deposit;