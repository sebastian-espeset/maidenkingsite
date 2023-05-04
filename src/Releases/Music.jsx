import "./music.scss";

export default function Music() {
  return (
    <div className="music">
      <div className="title">
        <h1>Music</h1>
      </div>
      <div className="musiccontainer">
        <div className="platformBox">
          <img
            src="/assets/Apple_Music_Small_Badge_RGB_091917.svg"
            alt="apple music link"
          />
        </div>
        <div className="platformBox">
          <img src="/assets/Spotify_Logo_CMYK_White.png" alt="" />
        </div>
        <div className="platformBox">
          <img
            src="/assets/Bandcamp-logotype-color.svg"
            alt=""
            style={{ filter: "invert(100%" }}
          />
        </div>
        <div className="platformBox">
          <img src="/assets/YouTube_Logo_2017.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
