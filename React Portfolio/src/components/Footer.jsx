const socials = [
  { href: "https://github.com/Alexm415", icon: "fa-github", label: "GitHub" },
  {
    href: "https://www.facebook.com/alex.mena.14203?mibextid=wwXIfr",
    icon: "fa-facebook",
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/alexander-mena-morales-724648337?trk=people-guest_people_search-card",
    icon: "fa-linkedin",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>Alexander Mena</span>
        <ul className="socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                <i className={`fa-brands ${s.icon}`} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
