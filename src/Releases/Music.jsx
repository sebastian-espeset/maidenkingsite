import "./music.scss";
import apple from "../assets/apple.svg";
import spotify from "../assets/spotify.png";
import bandcamp from "../assets/bandcamp.svg";
import youtube from "../assets/youtube.svg";

export default function Music() {
  return (
    <div className="music">
      <div className="title">
        <h1>Music</h1>
      </div>
      <div className="musiccontainer">
        <div className="platformBox">
          <img src={apple} alt="apple music link" />
        </div>
        <div className="platformBox">
          <img src={spotify} alt="spotify link" />
        </div>
        <div className="platformBox">
          <img
            src={bandcamp}
            alt="bandcamp link"
            style={{ filter: "invert(100%)" }}
          />
        </div>
        <div className="platformBox">
          <img src={youtube} alt="youtube link" />
        </div>
      </div>
    </div>
  );
}
