const styles = {
  nav: {
    padding: "50px",
  },
};

function Nav() {
  return (
    <div style={styles.nav} className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        <a className="nave-item nav-link link-body-emphasis" href="/">
          Alexander Mena
        </a>
        <a className="nave-item nav-link link-body-emphasis" href="/aboutme">
          About Me
        </a>
        <a className="nave-item nav-link link-body-emphasis" href="/portfolio">
          Portfolio
        </a>
        <a className="nave-item nav-link link-body-emphasis" href="/contact">
          Contact
        </a>
        <a className="nave-item nav-link link-body-emphasis" href="/resume">
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Nav;
