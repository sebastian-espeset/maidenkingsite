import "./videoPlayer.scss";
export default function VideoPlayer() {
  return (
    <div className="video-player">
      <iframe
        className="video-iframe"
        src="https://www.youtube.com/embed/mkrQyCmRlxQ?si=EKs-fx7SAKqScbBE&amp;start=26"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
