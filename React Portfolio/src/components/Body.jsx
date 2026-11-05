import Me from "../../../images/me.png";
import { Link } from "react-router-dom";

function Body() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-text">
        <p className="eyebrow">Full Stack Developer · San Francisco</p>
        <h1 id="hero-title">
          Hello, my name is <span className="accent">Alexander</span>
        </h1>
        <p className="lead">I am a full stack developer, from San Francisco. 😎</p>
        <div className="hero-actions">
          <Link to="/portfolio" className="btn btn-primary">
            View my work
          </Link>
          <Link to="/aboutme" className="btn btn-ghost">
            Continue reading about me
          </Link>
        </div>
      </div>
      <div className="hero-media">
        <img src={Me} alt="Portrait of Alexander Mena" className="hero-img" />
      </div>
    </section>
  );
}
export default Body;
