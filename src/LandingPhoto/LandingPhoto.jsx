import "./landingPhoto.scss";
import mklpcover from "../assets/mklpcover.jpg";

export default function LandingPhoto() {
  return (
    <div className="imagebox">
      <div className="imgcontainer">
        <img
          className="topImage"
          src={mklpcover}
          alt="cover of maiden king lp"
        />
      </div>
    </div>
  );
}
