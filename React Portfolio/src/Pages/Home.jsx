import Project from "../components/Projectcard";
import Body from "../components/Body";
import data from "../data";

export default function App() {
  return (
    <>
      <Body />
      <Project data={data} />
    </>
  );
}
