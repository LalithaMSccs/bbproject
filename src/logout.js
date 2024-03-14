import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
function Logout(){
    
    return (
        <>
        
            
        <div className="app1">
            <div className="login-form1">
        {localStorage.removeItem("Name")}
        <div id="wel">
           <b>Thank you For coming ! </b>
          
        </div>
        </div>
        </div>

        </>
        
    )
}
export default Logout;