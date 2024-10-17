import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutUs() {
  return (
    <div id="aboutus" style={{ padding: "40px 0px" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: "43px",
          margin: "40px 0px 25px",
          textShadow:"2px 4px 5px rgb(0,0,0,0.5)"
        }}
      >
        About Us
      </p>
      <Container className="m-5 p-5 mt-0">
        <Row>
          <Col xs={8} className="m-auto fs-5">
            <p style={{ fontSize: "35px" }}>
              The International Collegiate Programming Contest
              &ldquo;ICPC&rdquo;
            </p>
            is an algorithmic programming contest for college students. Teams of
            three, representing their university, work to solve the most
            real-world problems, fostering collaboration, creativity,
            innovation, and the ability to perform under pressure. Through
            training and competition, teams challenge each other to raise the
            bar on the possible. Quite simply, it is the oldest, largest, and
            most prestigious programming contest in the world.
          </Col>
          <Col xs={4}>
            <img
              src="/src/assets/Images/ICPC-Original-Logo.png"
              alt="ICPC Logo"
              style={{ height: "350px" }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="m-5 p-5 mb-0">
        <Row>
          <Col xs={4}>
            <img
              src="/src/assets/Images/ICPC-Logo.png"
              alt="ICPC Assiut Logo"
              style={{ height: "350px" }}
            />
          </Col>
          <Col xs={8} className="m-auto fs-5">
            <p style={{ fontSize: "35px" }}>ICPC Assiut Community</p>
            is a vibrant and dedicated group focused on competitive programming.
            The community also provides educational resources, offering
            tutorials on topics such as binary search and complexity analysis.
            We engage with members via social media, particularly Facebook, and
            regularly organize workshops and local contests to prepare for
            larger competitions like the ICPC regionals. Our consistent
            participation and notable achievements in these contests highlight
            their commitment to excellence in programming.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
