import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#280044",
        padding: "80px 10%",
        display: "flex",
      }}
    >
      <div style={{ width: "100%" }}>
        <h2
          style={{
            color: "white",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Codeschool
        </h2>
        <p style={{ color: "white", marginTop:16}}>
          Online community school for coder kids powered by CodingOtt
        </p>
      </div>

      <div style={{ width: "100%" }}>
        <h2
          style={{
            color: "white",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Popular Links
        </h2>
        <ul
          style={{
            padding: 0,
            margin: 0,
            listStyle: "none",
            display: "flex",
            marginTop:16
          }}
        >
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 16,
            }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {" "}
              Home{" "}
            </Link>

            <Link
              to="/teachers"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Teachers
            </Link>

            <Link
              to="/contact-us"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              ContactUs
            </Link>

            <Link
              to="/holidays"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Holidays
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ width: "100%" }}>
        <h2
          style={{
            color: "white",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Social Profiles
        </h2>
        <ul
          style={{
            padding: 0,
            margin: 0,
            listStyle: "none",
            display: "flex",
            marginTop:16
          }}
        >
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 16,
            }}
          >
            <Link
              to="https://www.youtube.com/watch?v=ZgyPuS8wNOg&list=PLNO6wb0sdKVfsPgSfrJdF7DnhLvY27Dfl&index=10"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {" "}
              <i
                className="ri-youtube-line"
                style={{ marginRight: 4 }}
              ></i>{" "}
              Youtube{" "}
            </Link>

            <Link
              to="https://www.facebook.com/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {" "}
              <i
                className="ri-facebook-fill"
                style={{ marginRight: 4 }}
              ></i>{" "}
              Facebook
            </Link>

            <Link
              to="https://www.linkedin.com/feed/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {" "}
              <i
                className="ri-linkedin-fill"
                style={{ marginRight: 4 }}
              ></i>{" "}
              Linkedin
            </Link>

            <Link
              to="https://www.instagram.com/accounts/login/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <i className="ri-instagram-fill" style={{ marginRight: 4 }}></i>{" "}
              Instagram
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ width: "100%" }}>
        <h2
          style={{
            color: "white",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Contact Us
        </h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 16,
          }}
        >
          <input
            required
            name="fullname"
            placeholder="Full name"
            type="text"
            style={{
              border: "none",
              padding: 12,
              borderRadius: 4,
              width: "100%",
            }}
          />

          <input
            required
            name="eamil"
            placeholder="example@gmail.com"
            type="email"
            style={{
              border: "none",
              padding: 12,
              borderRadius: 4,
              width: "100%",
            }}
          />

          <textarea
            required
            name="message"
            placeholder="Message"
            type="text"
            style={{
              border: "none",
              padding: 12,
              borderRadius: 4,
              width: "100%",
            }}
            rows="3"
          ></textarea>

          <button
            style={{
              border: "none",
              padding: "12px 24px",
              borderRadius: 4,
              width: "fit-content",
              color: "white",
              backgroundColor: "#ffb163",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
