import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import "./Private.css"

function Private() {
 const handleSignout=()=>{
  signOut(auth)
  .then(()=>alert("SignOut Successfully!"))
  .catch(error=>{
    console.log(error)
    alert(error.message)
  })
 }

    return (
      <div className="container">
        <h2>Welcome to Private Dashbord</h2>
        <h3>Profile</h3>
        <p>welcome to the private dashboard. Here you can manage your setting</p>

        
        <button onClick={handleSignout} id="private-btn">SignOut</button>
      </div>
    )
  }
  
  export default Private