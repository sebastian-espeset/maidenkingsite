import "./videoPlayer.scss";
import Untitled from "../assets/Untitled.mp4";

export default function VideoPlayer() {
  return (
    <div className="videocontainer">
      <div className="title">
        <h1>Who Else Were We Supposed To Become?</h1>
      </div>
      <video src={Untitled} autoPlay muted playsinline></video>
    </div>
  );
}
