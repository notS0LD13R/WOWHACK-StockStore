import "./TopBar.scss";

export default function TopBar() {
  return (
    <div className="TopBar">
      {/* <div className="background" /> */}
      <div className="icon">
        <img src="../../../assets/Logo.png" alt="icon" />
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
