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
        <h3 className="card-title">{project.title}</h3>
        {project.date && <p className="card-date">{project.date}</p>}
        <p className="card-text">{project.content}</p>
        <a href={project.link} className="card-link" target="_blank" rel="noreferrer">
          View on GitHub<span className="visually-hidden">: {project.title}</span>{" "}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export function ProjectGrid({ title, items }) {
  return (
    <section className="container section">
      <h2 className="section-title">{title}</h2>
      <div className="grid">
        {items.map((p) => (
          <ProjectCard key={p.link} project={p} />
        ))}
      </div>
    </section>
  );
}

export default function Projectcard({ data }) {
  return <ProjectGrid title="Featured Projects" items={data.projects} />;
}
