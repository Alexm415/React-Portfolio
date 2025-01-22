export default function Footer() {
  return (
    <div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item-divider"></li>
        <li className="nav-item">
          <a href="https://github.com/Alexm415" className="nav-link">
            <i className="fab fa-github"></i>
            <span className="d-xl-none ml-2">Github</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fab fa-twitter"></i>
            <span className="d-xl-none ml-2">Twitter</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fab fa-instagram"></i>
            <span className="d-xl-none ml-2">Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
