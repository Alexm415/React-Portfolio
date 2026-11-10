import resumePdf from "../../../Pdf/Resume.pdf";

const frontend = ["HTML", "CSS", "JavaScript", "jQuery", "Handlebars", "Bootstrap", "React"];
const backend = ["NodeJs", "Express Server", "mySql", "PostgreSQL", "MongoDb", "GraphQl"];

export default function Resume() {
  return (
    <section className="container section narrow">
      <p className="eyebrow">Resume</p>
      <h1 className="page-title">Skills &amp; Experience</h1>
      <a href={resumePdf} className="btn btn-primary" download>
        <i className="fa fa-download" aria-hidden="true"></i> Download My Resume
      </a>
      <div className="skills">
        <div className="panel">
          <h2>Frontend Tech</h2>
          <ul className="chips">{frontend.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
        <div className="panel">
          <h2>Backend Tech</h2>
          <ul className="chips">{backend.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
