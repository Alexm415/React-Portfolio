const links = [
  {
    href: "mailto:alex@compupodsf.com",
    icon: "fa-solid fa-envelope",
    title: "Compupod SF",
    sub: "alex@compupodsf.com",
  },
  {
    href: "https://github.com/Alexm415",
    icon: "fa-brands fa-github",
    title: "GitHub",
    sub: "github.com/Alexm415",
  },
  {
    href: "https://www.linkedin.com/in/alexander-mena-morales-724648337?trk=people-guest_people_search-card",
    icon: "fa-brands fa-linkedin",
    title: "LinkedIn",
    sub: "Alexander Mena Morales",
  },
  {
    href: "https://www.facebook.com/alex.mena.14203?mibextid=wwXIfr",
    icon: "fa-brands fa-facebook",
    title: "Facebook",
    sub: "Alex Mena",
  },
];

export default function Contact() {
  return (
    <section className="container section narrow">
      <p className="eyebrow">Get in touch</p>
      <h1 className="page-title">Contact me!</h1>
      <ul className="contact-grid" role="list" style={{ listStyle: "none", padding: 0 }}>
        {links.map((l) => {
          const external = !l.href.startsWith("mailto:");
          return (
            <li key={l.title}>
              <a
                className="contact-card"
                href={l.href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="contact-icon" aria-hidden="true">
                  <i className={l.icon}></i>
                </span>
                <span>
                  <strong>{l.title}</strong>
                  <span className="sub">{l.sub}</span>
                </span>
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
