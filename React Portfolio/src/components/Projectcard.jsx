/*const styles = {
  
    container: {
      position: "relative",
      width: "50%" ,
    },
    
    image: {
      opacity: 1,
      display: "block",
      width: "100%",
      height: "auto";
      transition: ".5s ease",
      backfacevisibility: "hidden",
    },
    
      middle: {
      transition:" .5s ease",
      opacity: "0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      mstransform: "translate(-50%, -50%)",
      textalign: "center",
    }
    
    container.hover image {
      opacity: "0.3",
    },
    
    container:hover .middle {
      opacity: 1;
    },
    
    text: {
      background-color: #04AA6D;
      color: white;
      font-size: 16px;
      padding: 16px 32px;
    }
  
}
*/

export default function Projectcard({ data }) {
  console.log(data);
  console.log(Array.isArray(data));
  return (
    <div>
      <div className="row mb-2">
        {data.projects.map((projects) => (
          <div className="col-md-6 containercard" key={projects.id}>
            <img src={projects.image} alt="Avatar" className="image" />
            <div className="middle">
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
          </div>
        ))}
      </div>
    </div>
  );
}
