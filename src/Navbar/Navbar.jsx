import "./navbar.scss";
import { useRef, useEffect } from "react";
// Props are commented out because we arent currently using them. No need for menu as of 7/11.
// Bottom menu button is commented out as well
export default function Navbar({ isMobile /* menuOpen, setMenuOpen */ }) {
  // nav bar disappears
  const navRef = useRef();
  useEffect(() => {
    let lastScrollTop;
    const navbar = navRef.current;
    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  }, []);
  return (
    <div className="nav" ref={navRef}>
      <div className="wrapper">
        <div className="left">
          <a className="name" href="#video">
            MAIDEN KING
          </a>
        </div>
        <div className={isMobile ? "rightMobile" : "right"}>
          <div className="nonMobile">
            <a href="#about">About</a>
            <a href="#upcomingShows">Shows</a>
            <a href="#contact">Contact</a>
            <a href="#music">Music</a>
          </div>
        </div>
      </div>
    </div>
  );
}
