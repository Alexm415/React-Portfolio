import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/aboutme", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
  { to: "/resume", label: "Resume" },
];

function Nav() {
  return (
    <nav className="site-nav" aria-label="Main">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          Alexander Mena
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => (`nav-link${l.to === "/resume" ? " nav-cta" : ""}${isActive ? " active" : ""}`)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
