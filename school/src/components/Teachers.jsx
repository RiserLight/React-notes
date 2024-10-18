import Navbar from "./navbar";
import Footer from "./Footer";

const teachers = [
  {
    src: "./teachers/a.jpg",
    name: "Rahul Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/b.jpg",
    name: "Atul Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/c.jpg",
    name: "Rishi Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/d.jpg",
    name: "Sunny Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/e.jpg",
    name: "Ankit Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/f.jpg",
    name: "Dipak Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/g.jpg",
    name: "Rohit Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/h.jpg",
    name: "Praveen Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/i.jpg",
    name: "Mihir Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/j.jpg",
    name: "Rohan Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/k.jpg",
    name: "Abhihek Singh",
    university: "MCA (Indian University)",
  },
  {
    src: "./teachers/l.jpg",
    name: "Rajesh Singh",
    university: "MCA (Indian University)",
  },
];

const Teachers = () => {
  return (
    <div>
      <Navbar />
      <div>
        <header
          style={{
            height: 280,
            backgroundImage:
              "linear-gradient( 85.2deg,  rgba(33,3,40,1) 7.5%, rgba(65,5,72,1) 88.7% )",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: 60,
              color: "white",
            }}
          >
            <i className="ri-user-voice-line" style={{ marginRight: 16 }}></i>
            Teachers
          </h1>
        </header>
        <section
          style={{
            width: "80%",
            margin: "0 auto",
            padding: "80px 0",
            display: "flex",
            columnGap: "1%",
            rowGap: 48,
            flexWrap: "wrap",
          }}
        >
          {teachers.length &&
            teachers.map((teacher) => (
              <div
                style={{
                  width: "20%",
                }}
                key={teacher.src}
              >
                <img src={teacher.src} width="100%" />
                <h2 style={{ padding: 0, marginBottom: 4 }}>{teacher.name}</h2>
                <p style={{ padding: 0, margin: 0, color: "gray" }}>
                  {teacher.university}
                </p>
              </div>
            ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Teachers;
