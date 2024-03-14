import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
import Usercontext from "./context";

function User_data(){
    let ctx=useContext(Usercontext);
    const [showDetails, setShowDetails] = useState(false);
    console.log("User data",ctx.users);
    function displayDetails(user){
        return(
            
            <tr>
                <div>
                    <p><b>Role:</b>{user.role}</p>
                </div>
                <div>
                    <p><b>Name:</b> {user.name}</p>
                </div>
                <div>
                    <p><b>Email:</b> {user.email}</p>
                </div>
                <div>
                    <p><b>Phone:</b> {user.phone}</p>
                </div>
                <div>
                    <p><b>Age:</b> {user.age}</p>
                </div>
                <div>
                    <p><b>Gender:</b> {user.gender}</p>
                </div>
                <div>
                    <p><b>Account No:</b> {user.accountNumber}</p>
                </div>
                <div>
                    <p><b>Balance:</b> {user.balance}</p>
                </div>
            </tr>      
        );
    }
                    
    
    return(
        <>
         <div className="app">
         <div className="login-form">
            <h3 className="user">Users Data</h3>
            <table className="table">
                <tr>
                    <th className="head">Name</th>
                    <th className="head">balance</th>
                    <th className="head">Full Details</th>
                </tr>
                {ctx.users.map((user,i)=>(
                    
                    <tr>
                        <td className="head">{user.name}</td>
                        <td className="head">{user.balance}</td>
                        <td>
                        <button onClick={()=>setShowDetails(user)}>Full details of User</button>
                        </td>
                    </tr>

                ))}
            </table>
            {showDetails && (
                <div className="login-form">
                    <h3 className="user">Full Details</h3>
                    <button onClick={() => setShowDetails(null)}>Back</button>
                    {ctx.currentUser.map(item=>(
                             item.role=='Admin'?
                             (<p> {displayDetails(showDetails)} </p>):
                             (
                                item.email === showDetails.email &&ctx.currentUser.role !== "Admin"&& <p>{displayDetails(showDetails)}</p>
                             )

                    ))}
                        
                        
                        
                    
                </div>
            )}
                 
            </div>
           
        </div>
        </>
    )
}
export default User_data;