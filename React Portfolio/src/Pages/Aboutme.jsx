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
              Hello everyone my name is Alexander!
              <span className="text-muted">Story time!.</span>
            </h2>
            <p className="lead">
              I am born and raised in San Francisco. All my life i have been
              around tech and i seem to be really good at learning and
              understanding how things worked. I started my journey when i was
              13 years old and i got my first iPhone. This iPhone 3Gs had a
              password and was carrier locked to At&t. I then found a way to
              restore the device, than jailbreak the device. Witch allowed me to
              activate the device and carrier unlock the device, so i could use
              the iPhone with any GSM carrier. At that time the iPhone was only
              sold to use under the At&t network. At the age of 13, i started
              working at a family owned cellphone repair shop. Became a
              cellphone tech, and continued learning more about all forms of
              tech. Now i found the amazing world of coding 🚀. Lets see where
              this takes me now!
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
