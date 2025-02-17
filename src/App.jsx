import "./App.css";
import LandingComponent from "./LandingComponent/LandingComponent";
import Navbar from "./Navbar/Navbar";
import LandingPhoto from "./LandingPhoto/LandingPhoto";
import About from "./About/About";
import UpcomingShows from "./UpcomingShows/UpcompingShows";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
// import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
// as of 11/28/23 we are removing upcoming shows and the contact form. need to do some research on security stuff
function App() {
  // if mobile view, we pass mobile prop as true to navbar so that the menu will render
  // this is for future menu implementation
  const [isMobile, setIsMobile] = useState(false);
  // we define menu open here so we can pass it to navbar and menu
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);
  if (isMobile == true) {
    return (
      <>
        <LandingComponent />
        <Navbar
          isMobile={isMobile}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <LandingPhoto />
        <About />
        <UpcomingShows />
        {/* <Contact /> */}
        <VideoPlayer />
        <MusicPlayer />
        <Footer />
      </>
    );
  }
  return (
    <>
      <LandingComponent />
      <Navbar
        isMobile={isMobile}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <LandingPhoto />
      <About />
      <UpcomingShows />
      {/* <Contact /> */}
      <VideoPlayer />
      <MusicPlayer />
      <Footer />
    </>
  );
}

export default App;
