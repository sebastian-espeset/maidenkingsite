import "./landingPhoto.scss";
import mklpcover from "../assets/mklpcover.png";

export default function LandingPhoto() {
  return (
    <div className="imagebox">
      <div className="imgcontainer">
        <img className="topImage" src={mklpcover} alt="" />
      </div>
    </div>
  );
}
