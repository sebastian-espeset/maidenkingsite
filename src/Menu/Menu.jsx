import "./menu.scss";
// To be used later
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#about"> About</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#music"> Music</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
    </div>
  );
}
