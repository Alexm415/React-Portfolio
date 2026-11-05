import data from "../data";
import { ProjectGrid } from "../components/Projectcard";
import CtaBand from "../components/CtaBand";

export default function Portfolio() {
  return (
    <>
      <header className="container page-header">
        <p className="eyebrow">Portfolio</p>
        <h1 className="page-title">Projects &amp; assignments</h1>
        <p className="lead">
          Group projects, coursework and repositories. Each card links to its
          source on GitHub.
        </p>
      </header>
      <ProjectGrid eyebrow="01" title="Projects" items={data.projects} />
      <ProjectGrid eyebrow="02" title="Other Assignments" items={data.otherAssignments} />
      <ProjectGrid eyebrow="03" title="More on GitHub" items={data.moreRepos} />
      <CtaBand />
    </>
  );
}
