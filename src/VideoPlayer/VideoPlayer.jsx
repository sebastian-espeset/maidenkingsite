import "./videoPlayer.scss";
// import Untitled from "../assets/Untitled.mp4";

export default function VideoPlayer() {
  return (
    <div className="imagebox">
      <div className="videocontainer" id="video">
        <div className="title">
          <h1>&quot; Who Else Were We Supposed To Become? &quot;</h1>
        </div>
        {/* <video autoPlay muted playsInline src={Untitled}></video> */}
      </div>
    </div>
  );
}
