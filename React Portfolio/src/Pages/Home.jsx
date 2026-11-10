import { Link } from "react-router-dom";
import Body from "../components/Body";
import { ProjectCard } from "../components/Projectcard";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import data from "../data";

const focus = [
  {
    icon: "fa-solid fa-display",
    title: "Front end",
    text: "Responsive interfaces with HTML, CSS, JavaScript and React.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Back end",
    text: "APIs and servers with Node.js and Express, backed by MongoDB, MySQL or PostgreSQL.",
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Business",
    text: "Part business owner of Compupod SF.",
  },
];

export default function Home() {
  return (
    <>
      <Body />
      <Reveal as="section" className="container section" aria-labelledby="focus-title">
        <p className="eyebrow">What I do</p>
        <h2 id="focus-title" className="section-title">Full stack, front to back</h2>
        <div className="focus-grid">
          {focus.map((f) => (
            <div className="focus-card" key={f.title}>
              <span className="focus-icon" aria-hidden="true">
                <i className={f.icon}></i>
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal as="section" className="container section" aria-labelledby="work-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title" className="section-title">Featured Projects</h2>
          </div>
          <Link to="/portfolio" className="text-link">
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid">
          {data.projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.link} project={p} />
          ))}
        </div>
      </Reveal>
      <CtaBand />
    </>
  );
}
