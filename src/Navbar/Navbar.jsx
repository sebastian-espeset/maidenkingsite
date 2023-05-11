import "./navbar.scss";
import { useRef, useEffect } from "react";

export default function Navbar() {
  const navRef = useRef();
  useEffect(() => {
    console.log(navRef);
    let lastScrollTop;
    const navbar = navRef.current;
    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(navbar);
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  return (
    <div className="nav" id={"navbar"} ref={navRef}>
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
