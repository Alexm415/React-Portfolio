import Me from "../../../images/me.png";

const styles = {
  pic: {
    width: 450,
    height: 400,
    borderRadius: 100,
  },
  profileImg: {
    height: 300,
    width: 300,
    borderRadius: 150,
    margin: "20px", // Add some space between the image and the text
  },
  flexContainer: {
    display: "flex",
    alignItems: "center", // Align items vertically centered
  },
  title: {
    marginLeft: "100px",
    padding: 50,
    whitespace: "nowrap",

    textoverflow: "ellipsis",
  },
};

function Body() {
  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h1 className="featurette-heading fst-italic">
              Hello My Name is Alexander
            </h1>
            <p className="lead">
              I am a full stack developer, from San Francisco. 😎
            </p>
            <p className="lead mb-0">
              <Link
                href="/aboutme"
                to="/aboutme"
                className="text-body-emphasis fw-bold"
              >
                Continue reading about me...
              </Link>
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              style={styles.pic}
              src={Me}
              data-holder-rendered="true"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Body;

/*import Me from "../../../images/me.jpeg";
const styles = {
  profileImg: {
    height: 250,
    width: 250,
    borderRadius: 100,
    display: "flex",
  },
  border: {
    display: "flex",
  },
};
function Body() {
  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">Hello My Name is Alexander</h1>
          <img className="display-4" src={Me} style={styles.profileImg} />
          <p className="lead my-3">
            I am a full stack develpor, from San Francisco. 😎
          </p>
          <p className="lead mb-0">
            <a href="/aboutme" className="text-body-emphasis fw-bold">
              Continue reading about me...
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
export default Body;
*/
