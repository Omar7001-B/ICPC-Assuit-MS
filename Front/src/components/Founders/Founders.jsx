import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurCard from "../OurCard/OurCard";
export default function Founders() {
  return (
    <div
      id="founders"
      style={{
        height: "800px",
        padding: "70px 0px",
        backgroundColor: "#444942",
        backgroundColor: "black"
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "70px",
          color:"#dfdfdf",
          textShadow:"2px 4px 5px rgb(255,255,255,0.7)"
        }}
      >
        Founders
      </p>
      <Container>
        <Row>
          <Col xs={6}>
            <OurCard
              src="/src/assets/Images/Hussien-Ibrahim.jpg"
              alt="Hussien Ibrahim Photo"
              name="Hussien Ibrahim"
              info=" Software Engineer 2 at Microsoft with strong background in competitive programming and problem solving"
              link="https://www.linkedin.com/in/hussienibrahiem/"
            />
          </Col>
          <Col xs={6}>
            <OurCard
              src="/src/assets/Images/Ayman-Morsy.jpg"
              alt="Ayman Morsy Photo"
              name="Ayman Morsy"
              info=" Software Engineer 2 at Microsoft with strong background in competitive programming and problem solving"
              link="https://www.linkedin.com/in/aymmorsy/"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
