const styles = {
  footer: {
    padding: "50px",
  },
};
export default function Footer() {
  return (
    <footer
      style={styles.footer}
      className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
    >
      <div className="col-md-4 d-flex align-items-center">
        <span className="text-muted">Alexander Mena</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="link-dark" href="https://github.com/Alexm415">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="ms-3">
          <a
            className="link-dark"
            href="https://www.facebook.com/alex.mena.14203?mibextid=wwXIfr"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li className="ms-3">
          <a
            className="link-dark"
            href="https://www.linkedin.com/in/alexander-mena-morales-724648337?trk=people-guest_people_search-card"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
