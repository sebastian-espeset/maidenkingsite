import "./App.css";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import UpcompingShows from "./UpcomingShows/UpcompingShows";
import Music from "./Releases/Music";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <UpcompingShows />
      <Music />
      <Contact />
    </>
  );
}

export default App;
