import "./LoginBox.scss";

export default function LoginBox() {
  return (
    <div className="LoginBox">
      <div className="LoginTitle">Log in</div>
      <div className="InputBoxes">
        <input className="inputBox" type="text" placeholder="Username" />
        <input className="inputBox" type="text" placeholder="Password" />
      </div>
      <div className="LoginBoxButtons">
        <button className="LoginButton">Login</button>
        <div id="or">or</div>
        <button className="LoginButton SignupColor">Signup</button>
      </div>
    </div>
  );
}
