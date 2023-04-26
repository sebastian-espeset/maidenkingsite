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
          <a>About</a>
          <a>Upcoming Shows</a>
          <a>Music</a>
          <a>Press</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}
