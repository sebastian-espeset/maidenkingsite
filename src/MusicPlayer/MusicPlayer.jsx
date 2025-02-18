import "./musicPlayer.scss";

export default function MusicPlayer() {
  return (
    <div className="music-player-container">
      <iframe
        className="music-iframe"
        scrolling="no"
        src="https://open.spotify.com/embed/track/0ujN3O0F5KpqRvQRwSJZut?utm_source=generator&theme=0"
      ></iframe>
    </div>
  );
}
