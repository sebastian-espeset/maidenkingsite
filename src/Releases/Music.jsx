import "./music.scss";
import apple from "../assets/apple.svg";
import spotify from "../assets/spotify.png";
import bandcamp from "../assets/bandcamp.svg";
import youtube from "../assets/youtube.svg";

export default function Music() {
  return (
    <div className="music" name="music" id="music">
      <div className="title">
        <h1>Music...</h1>
      </div>
      <div className="musiccontainer">
        <div className="platformBox">
          <img
            src={apple}
            alt="apple music link"
            onClick={() => {
              window.open(
                "https://music.apple.com/us/album/echo/1670366066?i=1670366067",
                "_blank"
              );
            }}
          />
        </div>
        <div className="platformBox">
          <img
            src={spotify}
            alt="spotify link"
            onClick={() => {
              window.open(
                "https://open.spotify.com/artist/2HgKV0kbxHbl3LAsuo9Cb0?si=wSnlILbOTDOFMJlEINSnbQ",
                "_blank"
              );
            }}
          />
        </div>
        <div className="platformBox">
          <img
            src={bandcamp}
            alt="bandcamp link"
            style={{ filter: "invert(100%)" }}
            onClick={() => {
              window.open(
                "https://maidenking.bandcamp.com/track/echo",
                "_blank"
              );
            }}
          />
        </div>
        <div className="platformBox">
          <img
            src={youtube}
            alt="youtube link"
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=3lbI7eDSpz8",
                "_blank"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
