import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import Usercontext from "./context";
import { useContext } from "react";
import image from "./icons8-bank-66.png";

function Navbar(){
  let ctx =useContext(Usercontext)
  // console.log("outside",ctx.currentUser);
  const [user,setUser] = useState(); 
  useEffect(() => {
    setInterval(() => {
      let temp=localStorage.getItem("Name");
      console.log(temp);
    
      setUser(temp);
    },500)
  },[])

    
 if(!user){
  return(     
      <nav class="navbar  Nav navbar-expand-lg">
    <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
  <li class="nav-item">
  <a class="nav-link" aria-current="page" href="#/">Home</a>
  
  </li>
  </ul>
  <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#/CreateAccount">Create Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/login/">Login</a>
        </li>             
      </ul>
      </div>
      <h2 className="bname">EASY BANK </h2>
      <a href="#/"><input type="image" src={image} id="img"/></a>
      </div>
    </nav>
        )
   }
   
   if(user){
    return(
    <nav class="navbar  Nav navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#/">Home</a>
      </li>
      </ul>
            <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" href="#/Deposit">Deposit</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/Withdraw">WithDraw</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/Usersdata">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="#/logout" >Logout</a>
          </li>
          </ul>
           
        
        
      </div>
      <h2 className="bname">EASY BANK </h2>
      <a href="#/"><input type="image" src={image} id="img"/></a>
      
    </div>
  </nav>);
   }            
              


}
export default Navbar;