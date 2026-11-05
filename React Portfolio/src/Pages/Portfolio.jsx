import data from "../data";
import { ProjectGrid } from "../components/Projectcard";

export default function Portfolio() {
  return (
    <>
      <ProjectGrid title="Projects" items={data.projects} />
      <ProjectGrid title="Other Assignments" items={data.otherAssignments} />
      <ProjectGrid title="More on GitHub" items={data.moreRepos} />
    </>
  );
}
