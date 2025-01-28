import { Link } from "react-router-dom";

const styles = {
  nav: {
    padding: "50px",
  },
};

function Nav() {
  return (
    <div style={styles.nav} className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        <Link className="nave-item nav-link link-body-emphasis" href="/" to="/">
          Alexander Mena
        </Link>
        <Link
          className="nave-item nav-link link-body-emphasis"
          href="/aboutme"
          to="/aboutme"
        >
          About Me
        </Link>
        <Link
          className="nave-item nav-link link-body-emphasis"
          href="/portfolio"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="nave-item nav-link link-body-emphasis"
          href="/contact"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="nave-item nav-link link-body-emphasis"
          href="/resume"
          to="/resume"
        >
          Resume
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
