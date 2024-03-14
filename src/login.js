import { useState } from "react";
import { useContext,createContext } from "react";
import Usercontext from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [show,setShow]=useState(true);
    let ctx =useContext(Usercontext);
    console.log("users", ctx.users);
    console.log("current users", ctx.currentUser);
    function Submit(e){
        e.preventDefault();
        const user = ctx.users.find(user => user.email === email && user.password === password);
        console.log('user',user);

        if (user) { 
            ctx.currentUser.push(user);
            localStorage.setItem("Name",user.name);
            alert('Successful login');
        } else {
            alert('Invalid email or password');
            return; 
        } 
        console.log("after login",ctx.currentUser);
       
        setShow(false);
    }



    return(
        <>
        <div className="app">
            <div className="login-form">
               
                <div className="form">
                {show ?
                    <form>
                        <div className="title">Login</div>
                        <div className="input-container">
                            <label>UserEmail: </label>
                            <input type="text" name="uname" required value={email} onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Password: </label>
                            <input type="password" name="pass" required    value={password} onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <div className="button-container">
                           <button onClick={Submit}>Login</button>
                        </div>
                    </form>:
                    <div>
                    <div id="welcome">
                        <b>Welcome!</b>               
                    </div>
                    <h3 id="success">Successful login</h3> 
                    </div>
                    }
                              
                </div>     
            </div>
           
        </div>
        </>
    );

}
export default Login;