import { Link } from "react-router-dom";
import "./styles.css";

const popularLinks = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/teachers",
    name: "Teachers",
  },
  {
    to: "/holidays",
    name: "Holidays",
  },
];
const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 24px",
        boxShadow: "0 8px 8px 0px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <img src="./images/logo.png" width="60" />
        <h1>Codeschool</h1>
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          columnGap: 32,
        }}
      >
        {popularLinks.length &&
          popularLinks.map((links) => (
            <li style={{ padding: "12px 0px" }} key={links.to}>
              <Link
                to={links.to}
                style={{
                  textDecoration: "none",
                  color: "#323232",
                  fontSize: 17,
                }}
              >
                {links.name}
              </Link>
            </li>
          ))}
        <li
          style={{
            padding: "12px 0px",
            marginTop: "6px",
          }}
        >
          <Link
            to="/contact-us"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: 17,
              background: "#6863ff",
              padding: "12px 24px",
            }}
            className="contact-us-btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
