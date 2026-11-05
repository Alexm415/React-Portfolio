import Reveal from "./Reveal";

export function ProjectCard({ project }) {
  return (
    <article className="card">
      {project.image ? (
        <div className="card-media">
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        </div>
      ) : (
        <div className="card-media card-media--placeholder" aria-hidden="true">
          <i className="fa-brands fa-github"></i>
        </div>
      )}
      <div className="card-body">
        <div className="card-meta">
          {project.kind && <span className="kind">{project.kind}</span>}
          {project.date && <span className="card-date">{project.date}</span>}
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.content}</p>
        {project.tags && (
          <ul className="tags" aria-label="Topics">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <a href={project.link} className="card-link" target="_blank" rel="noreferrer">
          View on GitHub<span className="visually-hidden">: {project.title}</span>{" "}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export function ProjectGrid({ title, eyebrow, items }) {
  return (
    <Reveal as="section" className="container section">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      <div className="grid">
        {items.map((p) => (
          <ProjectCard key={p.link} project={p} />
        ))}
      </div>
    </Reveal>
  );
}

export default function Projectcard({ data }) {
  return <ProjectGrid title="Featured Projects" items={data.projects} />;
}
