import { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
import Usercontext from "./context";

function User_data() {
    let ctx = useContext(Usercontext);
    const [showDetails, setShowDetails] = useState(null);
    console.log("User data", ctx.users);

    function displayDetails(user) {
        return (
            <tr key={user.email}>
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

    const isAdmin = ctx.currentUser.map(user => user.role === 'Admin');
    const currentUserEmail = ctx.currentUser[0]?.email;
    const currentUserrole = ctx.currentUser[0]?.role;
    return (
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
                        {ctx.users.map((user, i) => (
                            <tr key={i}>
                                <td className="head">{user.name}</td>
                                <td className="head">{user.balance}</td>
                                <td>
                                    <button onClick={() => setShowDetails(user)}>Full details of User</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    {showDetails && (
                        <div className="login-form">
                            <h3 className="user">Full Details</h3>
                            <button onClick={() => setShowDetails(null)}>Back</button>
                            {isAdmin ? (
                                displayDetails(showDetails)
                            ) : showDetails.email === currentUserEmail && currentUserrole!=='Admin'? (
                                displayDetails(showDetails)
                            ) : (
                                <p>You are not authorized to view this user's details.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default User_data;
