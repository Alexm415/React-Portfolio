import { Outlet } from "react-router-dom";
import Header from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <Nav />
      <main id="main" className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
