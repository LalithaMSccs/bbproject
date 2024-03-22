import { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
import Usercontext from "./context";

function User_data(){
    let ctx = useContext(Usercontext);
    const [showDetails, setShowDetails] = useState(null);

    useEffect(() => {
        // Reset showDetails when user context changes
        setShowDetails(null);
    }, [ctx]);

    function displayDetails(user) {
        return(    
            <tr className="head">
                <td colSpan="3">
                    <div>
                        <p><b>Role:</b> {user.role}</p>
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Phone:</b> {user.phone}</p>
                        <p><b>Age:</b> {user.age}</p>
                        <p><b>Gender:</b> {user.gender}</p>
                        <p><b>Account No:</b> {user.accountNumber}</p>
                        <p><b>Balance:</b> {user.balance}</p>
                    </div>
                </td>
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
                        {ctx.currentUser.map(item => (
                            item.role === 'Admin' || (item.email === showDetails.email && item.role !== "Admin") ? (
                                <p>{displayDetails(showDetails)}</p>
                            ) : null
                        ))}
                    </div>
                )}         
            </div>  
        </div>
        </>
    )
}

export default User_data;
