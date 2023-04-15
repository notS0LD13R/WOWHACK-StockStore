import "./LoginBox.scss";

export default function LoginBox() {
  return (
    <div className="LoginBox">
      <div className="InputBoxes">
        <input className="inputBox" type="text" placeholder="Username" />
        <input className="inputBox" type="text" placeholder="Password" />
      </div>
      <div className="LoginBoxButtons">
        <button className="LoginButton">Login</button>
        <button className="LoginButton">Signup</button>
      </div>
    </div>
  );
}
