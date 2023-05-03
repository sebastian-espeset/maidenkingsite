import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="left">
          <a className="name">M A I D E N K I N G</a>

          <div className="itemContainer"></div>
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
