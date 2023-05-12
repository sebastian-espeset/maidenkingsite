import "./App.css";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import About from "./About/About";
import UpcompingShows from "./UpcomingShows/UpcompingShows";
import Music from "./Releases/Music";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";

function App() {
  // if mobile view, we pass mobile prop as true to navbar so that the menu will render
  const [isMobile, setIsMobile] = useState(false);
  // we define menu open here so we can pass it to navbar and menu
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <Navbar
        isMobile={isMobile}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <VideoPlayer />
      <About />
      <UpcompingShows />
      <Contact />
      <Music />
    </>
  );
}

export default App;
