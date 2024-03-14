import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
import './home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import Usercontext from "./context";
import React from "react";
import CreateAccount from "./CreateAccount";
import Navbar from "./Navigation";
import Home from "./Home";
import Deposit from "./Deposit";
import Withdraw from "./withdraw";
import User_data from "./user_data";
import { useState } from "react";
import {  HashRouter, Route,Routes } from "react-router-dom";
import Login from "./login";
import Logout from "./logout";
import { useContext } from "react";
function App(){
  let randomNumber
        const generateRandomNumber = () => {
            const length = 12;
            const min = Math.pow(10, length - 1);
            const max = Math.pow(10, length) - 1;
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        generateRandomNumber();

        
        
  return(
    <>
    <div>
      <HashRouter>
       
        <Usercontext.Provider
        value={{
          users:[{
            role:'Admin',
            name: "Lalitha",
            email: "lalitha@gmail.com",
            phone:8754629669,
            age:21,
            gender:'Female',
            password: "1234",
            balance:0,
            accountNumber:randomNumber
          }],
            currentUser:[]
        }}>
           <Navbar/>
          <Routes>
            <Route  path="/" excat element={<Home/>}/>
            <Route  path="/CreateAccount" element={<CreateAccount/>}/>
            <Route path="/login/" element={<Login/>}/>
            <Route path="/Deposit" element={<Deposit/>}/>
            <Route path="/Withdraw" element={<Withdraw/>}/>
            <Route path="/Usersdata" element={<User_data/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Routes>
        </Usercontext.Provider>
    
       </HashRouter>
    </div>
    </>
  )
}
export default App;