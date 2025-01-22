export default function Contact() {
  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="text-center">
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Contact me!</h1>
            <ul>
              <li>
                <label for="inputName" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="inputName"
                  placeholder="Your name"
                  name="nametext"
                  required
                />
              </li>
              <li>
                <label for="inputEmail" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </li>
              <li>
                <label for="inputMessage" className="sr-only">
                  Your Message
                </label>
                <textarea
                  type="text"
                  id="inputMessage"
                  placeholder="Your Message"
                  name="nametext"
                  required
                />
              </li>
              <button class="btn btn-lg btn-primary btn-block" type="submit">
                Send it
              </button>
            </ul>
          </form>
        </div>
      </div>
    </main>
  );
}
