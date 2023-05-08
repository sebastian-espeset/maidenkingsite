import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="left">
          <a className="name" href="#video">
            M A I D E N K I N G
          </a>

          <div className="itemContainer"></div>
        </div>
        <div className="right">
          <a href="#about">About</a>
          <a href="#upcomingShows">Upcoming Shows</a>
          <a href="#music">Music</a>
          <a>Press</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
