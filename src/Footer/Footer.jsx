import "./footer.scss";
import newApple from "../assets/newApple.svg";
import newSpot from "../assets/newSpot.svg";
import newBandcamp from "../assets/newBandcamp.png";
import newYoutube from "../assets/newYoutube.png";

export default function Footer() {
  return (
    <div className="music" name="music" id="music">
      <div className="musiccontainer">
        <div className="platformBox">
          <img
            src={newApple}
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
            src={newSpot}
            alt="spotify link"
            style={{ filter: "invert(100%)" }}
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
            src={newBandcamp}
            alt="bandcamp link"
            onClick={() => {
              window.open(
                "https://maidenking.bandcamp.com/album/who-else-were-we-supposed-to-become",
                "_blank"
              );
            }}
          />
        </div>
        <div className="platformBox">
          <img
            src={newYoutube}
            alt="youtube link"
            style={{ filter: "invert(100%)" }}
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
