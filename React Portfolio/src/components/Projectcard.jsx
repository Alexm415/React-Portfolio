export default function Projectcard({ data }) {
  console.log(data);
  console.log(Array.isArray(data));
  return (
    <div>
      <div className="row mb-2">
        {data.projects.map((projects) => (
          <div className="col-md-6" key={projects.id}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">{`${projects.title}`}</h3>
                <div className="mb-1 text-body-secondary">{`${projects.date}`}</div>
                <p className="card-text mb-auto">{`${projects.content}`}</p>
                <a
                  href={`${projects.link}`}
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
