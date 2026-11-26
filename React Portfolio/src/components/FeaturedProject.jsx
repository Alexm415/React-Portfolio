import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

function usePrefersReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function LoopClip({ video, reducedMotion }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return undefined;
    if (!("IntersectionObserver" in window)) {
      el.play().catch(() => {});
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <figure className="featured-cut">
        <img src={video.poster} alt={video.alt} />
        <figcaption>{video.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="featured-cut featured-clip">
      <video
        ref={ref}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        width="406"
        height="720"
        aria-label={video.alt}
      >
        {video.webm && <source src={video.webm} type="video/webm" />}
        <source src={video.mp4} type="video/mp4" />
      </video>
      <figcaption>{video.caption}</figcaption>
    </figure>
  );
}

export default function FeaturedProject({ project, headingLevel = 2 }) {
  const reducedMotion = usePrefersReducedMotion();
  const Title = headingLevel === 3 ? "h3" : "h2";

  return (
    <Reveal as="article" className="featured-card">
      <div className="featured-layout">
        <div className="featured-copy">
          <div className="card-meta">
            {project.kind && <span className="kind">{project.kind}</span>}
            {project.date && <span className="card-date">{project.date}</span>}
          </div>
          <Title id={project.titleId || "featured-title"} className="section-title featured-title">
            {project.title}
          </Title>
          {project.kicker && <p className="featured-kicker">{project.kicker}</p>}
          <p className="featured-text">{project.content}</p>
          {project.tags && (
            <ul className="tags" aria-label="Topics">
              {project.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          <div className="hero-actions featured-actions">
            <a
              className="btn btn-primary"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Visit live site <span aria-hidden="true">→</span>
            </a>
            <a
              className="btn btn-ghost"
              href={project.code}
              target="_blank"
              rel="noreferrer"
            >
              View code
            </a>
            {project.book && (
              <a
                className="btn btn-ghost"
                href={project.book}
                target="_blank"
                rel="noreferrer"
              >
                Book Now
              </a>
            )}
          </div>
        </div>
        <div className="featured-shots">
          <img
            className="featured-desktop"
            src={project.desktop}
            alt={project.desktopAlt || "Blendzwitdom homepage on desktop"}
            width={project.desktopWidth || 1366}
            height={project.desktopHeight || 768}
          />
          {project.mobile && (
            <img
              className="featured-mobile"
              src={project.mobile}
              alt={project.mobileAlt || "Blendzwitdom homepage on a phone"}
              width={project.mobileWidth || 780}
              height={project.mobileHeight || 1688}
            />
          )}
        </div>
      </div>
      {(project.gallery?.length > 0 || project.videos?.length > 0) && (
        <div className="featured-cuts">
          {(project.gallery || []).map((shot) => (
            <figure className="featured-cut" key={shot.caption}>
              <img src={shot.src} alt={shot.alt} loading="lazy" />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
          {(project.videos || []).map((video) => (
            <LoopClip
              key={video.caption}
              video={video}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      )}
    </Reveal>
  );
}
