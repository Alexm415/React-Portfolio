import { Outlet } from "react-router-dom";
import Header from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
