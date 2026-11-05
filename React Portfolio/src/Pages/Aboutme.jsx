import me from "../../../images/Hugs.jpeg";

function Aboutme() {
  return (
    <section className="container section about">
      <img className="about-img" alt="Alexander Mena" src={me} />
      <div>
        <p className="eyebrow">About Me</p>
        <h1 className="page-title">Hello, my name is Alexander!</h1>
        <p className="lead">
          Born and raised in San Francisco. I&apos;m currently an operator at
          Compupod. I love developing apps and websites. I&apos;m a highly
          motivated individual with a great understanding of both Front end
          development and Back end development. The languages I&apos;ve worked
          with are HTML, CSS, JavaScript, NodeJs, React and more. I am wanting
          to continue to learn more languages in this field. I&apos;m a team
          player and also enjoy working until the job is done.
        </p>
      </div>
    </section>
  );
}
export default Aboutme;
