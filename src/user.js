import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
import Usercontext from "./context";

function User(){
    let ctx = useContext(Usercontext);
    const currentUser = ctx.currentUser;

    return (
        <div className="app">
            <div className="login-form">
                <h3 className="user">Profile Details</h3>
                <div>
                    {currentUser.map(user=>(
                        <div>
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Email:</b> {user.email}</p>
                           <p><b>Phone:</b> {user.phone}</p>
                           <p><b>Age:</b> {user.age}</p>
                           <p><b>Gender:</b> {user.gender}</p>
                           <p><b>Account No:</b> {user.accountNumber}</p>
                           <p><b>Balance:</b> {user.balance}</p>

                       </div>

                    ))}

                </div>
            </div>
        </div>
    );
}

export default User;
