import "./videoPlayer.scss";
export default function VideoPlayer() {
  return (
    <div className="video-player">
      <iframe
        className="video-iframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RUgxzkWxy50?si=Crsh20qyWuV6lnWe&amp;controls=0"
        title="Maiden King, Phony Gold"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
