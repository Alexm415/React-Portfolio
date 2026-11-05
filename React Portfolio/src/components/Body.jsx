import Me from "../../../images/me-hero.jpg";
import { Link } from "react-router-dom";

function Body() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-text">
        <p className="eyebrow">Full Stack Developer · San Francisco</p>
        <h1 id="hero-title">
          Hello, my name is <span className="accent">Alexander</span>
        </h1>
        <p className="hero-sub">
          I build web apps end to end, from React front ends to Node.js back
          ends and databases.
        </p>
        <p className="lead">I am a full stack developer, from San Francisco. 😎</p>
        <p className="owner-badge">
          <span className="dot" aria-hidden="true"></span> Part business owner of Compupod SF
        </p>
        <div className="hero-actions">
          <Link to="/portfolio" className="btn btn-primary">
            View my work
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Get in touch
          </Link>
        </div>
        <Link to="/aboutme" className="text-link">
          Continue reading about me <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="hero-media">
        <div className="hero-frame">
          <img src={Me} alt="Portrait of Alexander Mena" className="hero-img" width="800" height="533" />
        </div>
      </div>
    </section>
  );
}
export default Body;
