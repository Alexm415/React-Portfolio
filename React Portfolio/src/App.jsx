import { Outlet } from "react-router-dom";
import Header from "./components/Head";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
}
