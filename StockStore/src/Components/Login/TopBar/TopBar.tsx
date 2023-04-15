import "./TopBar.scss";
import logo from '../../../assets/Logo.png'
export default function TopBar() {
  return (
    <div className="TopBar">
      {/* <div className="background" /> */}
      <div className="icon">
        <img src={logo} alt="Logo"  />
      </div>
      <div className="actionButtons">
        {/* Other buttons */}
        <div>Button 1</div>
        <div>Button 2</div>
        <div>Button 3</div>
      </div>
    </div>
  );
}
