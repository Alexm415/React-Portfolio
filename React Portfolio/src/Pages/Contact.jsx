export default function Contact() {
  return (
    <section className="container section narrow">
      <p className="eyebrow">Get in touch</p>
      <h1 className="page-title">Contact me!</h1>
      <form className="panel form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="inputName">Your Name</label>
        <input type="text" id="inputName" name="name" placeholder="Your name" required />
        <label htmlFor="inputEmail">Email address</label>
        <input type="email" id="inputEmail" name="email" placeholder="Email address" required />
        <label htmlFor="inputMessage">Your Message</label>
        <textarea id="inputMessage" name="message" rows="5" placeholder="Your Message" required />
        <button className="btn btn-primary" type="submit">
          Send it
        </button>
      </form>
    </section>
  );
}
