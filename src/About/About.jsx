import linebreak1 from "../assets/linebreak1.png";
import linebreak2 from "../assets/linebreak2.png";
import linebreak3 from "../assets/linebreak3.png";
import "./about.scss";
export default function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>Who he&apos;s been</h1>
      </div>
      <div className="copyBox">
        <p className="copy">
          Maiden King is the solo effort of Jake Hawrylak, a Santa Fe
          bred/Chicago made singer songwriter. The band is a vessel for
          exploring how to make deeply intricate and introspective music sound
          fun and exciting. These songs revel in the complexities and nuances of
          very simple seeds and relish in the unfolding of a story that never
          ends. Energetic and questioning rock music with flourishes of
          americana, cinematic orchestrations and textured ambient music. The
          self produced debut &quot;Who Else Were We Supposed to Become?&quot;
          releases fall 2023.
          <br />
          <img src={linebreak1} alt="" />
          <br />
          The LP was written to mythologize a number of wandering memories that
          kept floating into focus during the early months of the pandemic. The
          first moment of derealization as a young man; a rambunctious tale of
          arson in the shadow of a bigger fight with a dear friend; escaping the
          mire of one’s self esteem; and finally a moment (or two) of quiet
          acceptance. Though seemingly disparate, the coalescence of all of
          these began to paint a clearer picture. The title is completely
          rhetorical, a kind of matter of fact reckoning with the person you
          were always going to become and the peace that can finally settle when
          you stop fighting it.
          <br />
          <img src={linebreak2} alt="" />
          <br />
          In addition to leading this project, Jake is also a friend and
          frequent collaborator with the likes of{" "}
          <a href="https://www.sunjacket.net/" rel="noreferrer" target="_blank">
            Sunjacket
          </a>
          ;{" "}
          <a
            href="https://sedgewick.bandcamp.com/"
            rel="noreferrer"
            target="_blank"
          >
            Sedgewick
          </a>
          ;{" "}
          <a href="https://renocruz.com/" rel="noreferrer" target="_blank">
            Reno Cruz
          </a>
          ;{" "}
          <a href="https://leroybach.com/" rel="noreferrer" target="_blank">
            Leroy Bach
          </a>
          ;{" "}
          <a
            href="https://www.artistmarvintate.com/"
            rel="noreferrer"
            target="_blank"
          >
            Marvin Tate
          </a>
          ;{" "}
          <a
            href="https://www.iamaliciawalter.com/"
            rel="noreferrer"
            target="_blank"
          >
            Alicia Walters
          </a>
          ;{" "}
          <a
            href="https://jenniferhall.com/index.html"
            rel="noreferrer"
            target="_blank"
          >
            Jenn Hall
          </a>
          ;{" "}
          <a
            href="https://astrachanmusic.bandcamp.com/"
            rel="noreferrer"
            target="_blank"
          >
            Astrachan
          </a>
          ;{" "}
          <a
            href="https://www.youtube.com/watch?v=MtAKNKue-8g"
            rel="noreferrer"
            target="_blank"
          >
            Claude
          </a>
          ;{" "}
          <a
            href="http://www.joegeorgemusic.net/"
            rel="noreferrer"
            target="_blank"
          >
            Joe George
          </a>
          ; and many more.
          <br />
          <img src={linebreak3} alt="" />
        </p>
      </div>
    </div>
  );
}
