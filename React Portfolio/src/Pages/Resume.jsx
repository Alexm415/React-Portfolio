import resumePdf from "../../../Pdf/Resume.pdf";
export default function Resume() {
  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div class="columns download">
          <p>
            <a href={resumePdf} className="button">
              <i className="fa fa-download"></i>Download My Resume
            </a>
          </p>

          <div>
            <h2>Frontend Tech</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQueriy</li>
              <li>Handlebars</li>
              <li>Bootstap</li>
              <li>React</li>
            </ul>
            <h2>Backend Tech</h2>
            <ul>
              <li>NodeJs</li>
              <li>Express Server</li>
              <li>mySql and PostSQL</li>
              <li>MongoDb</li>
              <li>GraphQl</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
