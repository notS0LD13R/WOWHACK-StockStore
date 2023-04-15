import "./LoginBox.scss";

import { useNavigate } from "react-router";
export default function LoginBox() {
  const nav=useNavigate()
  const Login=()=>{
    nav('/Dashboard')
  }

  return (
    <div className="LoginBox">
      <div className="LoginTitle">Log in</div>
      <div className="InputBoxes">
        <input className="inputBox" type="text" placeholder="Username" />
        <input className="inputBox" type="password" placeholder="Password" />
      </div>
      <div className="LoginBoxButtons">
        <button className="LoginButton" onClick={Login}>Login</button>
        <div id="or">or</div>
        <button className="LoginButton SignupColor">Signup</button>
      </div>
    </div>
  );
}
