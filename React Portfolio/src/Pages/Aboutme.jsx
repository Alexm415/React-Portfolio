import me from "../../../images/Hugs.jpeg";
const styles = {
  pic: {
    width: 350,
    height: 500,
    borderRadius: 100,
  },
};
function Aboutme() {
  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Hello, my name is Alexander !
            </h2>
            <p className="lead">
              Born and raised in San Francisco. I'm currently an operator at
              Compupod. I love developing apps and websites. I'm a highly
              motivated individual with a great understanding of both Front end
              development and Back end development. The languages I've worked
              with are HTML, CSS, JavaScript, NodeJs, React and more. I am
              wanting to continue to learn more languages in this field. I'm a
              team player and also enjoy working until the job is done.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              style={styles.pic}
              src={me}
              data-holder-rendered="true"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Aboutme;
