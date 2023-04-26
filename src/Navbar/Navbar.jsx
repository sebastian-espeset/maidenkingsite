import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="left">
          <a className="name">Maiden King</a>

          <div className="itemContainer">
            <img src="/assets/tempNar.png" alt="" />
          </div>
        </div>
        <div className="right">
          stuff
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
