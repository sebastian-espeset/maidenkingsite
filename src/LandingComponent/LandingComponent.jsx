import "./landingComponent.scss";
import { useState, useEffect } from "react";
export default function LandingComponent() {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false);
    }, 8000);
  }, []);
  if (isHidden) {
    return (
      <div className="landing-component-box">
        <div className="title-text-box">
          <h1>Who Else Were We Supposed to Become?</h1>
        </div>
        <div className="date-text-box">
          <h2>Out 12-1-23</h2>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
