import { useState } from "react";
import { useContext,createContext } from "react";
import Usercontext from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
function CreateAccount(){
    const [name,setName]=useState('');
    let [email,setEmail]=useState('');
    const [phone,setPhone]=useState();
    const [age,setAge]=useState();
    const [gender,setGender]=useState('');
    const [password,setPassword]=useState('');
    const [show,setShow]=useState(true);
    let ctx =useContext(Usercontext);
    

    function create(e){
        e.preventDefault();
        console.log("User data before creating account:",ctx);
        console.log("Input's: ","Name ",name,"Age ",age,"Email ",email,"Phone no ",phone,"Age ",age,"Gender ",gender,"Password ",password);
        console.log(typeof(name));
        if(name==""){
            alert("Please Enter name");
            return;
        }else if(!isNaN(name)){
            alert("No numbers are allowed");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }else{
        ctx.users.map(u=>
            email==u.email ?alert(" Email id already exist") :null
        )}
        if(!phone){
            alert('please Enter phone number');
            return;
        }else if(phone.length<10){
            alert('Your phone number is less than 10. Phone number should be 10 numbers');
            return;
        }
        else if(phone.length>10){
            alert('Your phone number is greater than 10. Phone number should be 10 numbers');
            return;
        }
        if(!age){
            alert('please Enter age');
            return;
        }
      
        else if(age.length<2){
            alert('Age should in 2 numbers');
            return;
        }
        else if(age.length>2){
            alert('Age should in 2 numbers');
            return;
        }
        if(!gender){
            alert('please select gender');
            return;
        }
        const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
        if(!password){
            alert('please enter password');
        }
        else if(!strongPasswordRegex.test(password)){
            alert('Password should be strong(upper case letter,characters,this symbols "!@#$%^&*" and digits)');
            return;
        }
        let randomNumber
        const generateRandomNumber = () => {
            const length = 12;
            const min = Math.pow(10, length - 1);
            const max = Math.pow(10, length) - 1;
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        generateRandomNumber();
        if(ctx.users.accountNumber==randomNumber){
            generateRandomNumber();
        }
        ctx.users.push({role:'Guest',name,email,phone,age,gender,password,balance:0,accountNumber:randomNumber});
        console.log(" user data After account  created:",ctx);
        setShow(false);

    }
    function reset(){
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
        setGender('');
        setPassword('');
        setShow(true);
    }



    return(
        <>
        <div className="app">
            <div className="login-form">
                <div className="title">Create Account</div>
                <div className="form">
                    {show ?
                    <form>
                        <div className="input-container">
                            <label>Name: </label>
                            <input type="text" name="uname" required value={name} onChange={e=>setName(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Email: </label>
                            <input type="text" name="uname" required value={email} onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Phone: </label>
                            <input type="number" name="uname" required value={phone} onChange={e=>setPhone(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>age: </label>
                            <input type="number" name="uname" required value={age} onChange={e=>setAge(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Gender: </label>
                            <select id="Size" name="Size" value={gender} onChange={e=>setGender(e.target.value)}>
                                <option>Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Password: </label>
                            <input type="password" name="pass" required    value={password} onChange={e=>setPassword(e.target.value)} />
                        </div>
        
                        <div className="button-container">
                           <button onClick={create}>Submit</button>
                        </div>
                   </form>:
                   <>
                   <h4 id="success">Successfully created</h4>
                   <div className="button-container">
                   <div><button onClick={reset}>Create another Account</button></div>
                   </div></>}
                </div>       
            </div>
        </div>
        </>
    );

}
export default CreateAccount;