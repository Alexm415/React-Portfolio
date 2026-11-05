import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <Reveal as="section" className="container section">
      <div className="cta-band">
        <div>
          <p className="eyebrow">Let&apos;s connect</p>
          <h2 className="cta-title">Have a project or question in mind?</h2>
          <p className="muted">Reach me on GitHub, LinkedIn, or through Compupod SF.</p>
        </div>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Get in touch
          </Link>
          <Link to="/resume" className="btn btn-ghost">
            View resume
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
