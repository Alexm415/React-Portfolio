import data from "../data";
import { ProjectGrid } from "../components/Projectcard";
import FeaturedProject from "../components/FeaturedProject";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";

export default function Portfolio() {
  return (
    <>
      <header className="container page-header">
        <p className="eyebrow">Portfolio</p>
        <h1 className="page-title">Projects &amp; assignments</h1>
        <p className="lead">
          A featured client site up top, then group projects, coursework and
          repositories. Most cards link to their source on GitHub.
        </p>
      </header>
      <Reveal as="section" className="container section" aria-labelledby="featured-title">
        <p className="eyebrow">Featured</p>
        <FeaturedProject project={data.featuredProject} />
      </Reveal>
      <ProjectGrid eyebrow="01" title="Projects" items={data.projects} />
      <ProjectGrid eyebrow="02" title="Other Assignments" items={data.otherAssignments} />
      <ProjectGrid eyebrow="03" title="More on GitHub" items={data.moreRepos} />
      <CtaBand />
    </>
  );
}
