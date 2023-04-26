import "./App.css";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import UpcompingShows from "./UpcomingShows/UpcompingShows";
import Music from "./Releases/Music";
import Press from "./Press/Press";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <UpcompingShows />
      <Music />
      <Press />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
