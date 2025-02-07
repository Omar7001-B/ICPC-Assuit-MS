import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurCard from "../OurCard/OurCard";
import HussienIbrahim from "../../assets/Images/Hussien-Ibrahim.jpg"
import AymanMorsy from "../../assets/Images/Ayman-Morsy.jpg"
export default function Founders() {
  return (
    <div
      id="founders"
      style={{
        height: "800px",
        padding: "70px 0px",
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
              src={HussienIbrahim}
              alt="Hussien Ibrahim Photo"
              name="Hussien Ibrahim"
              info=" Software Engineer 2 at Microsoft with strong background in competitive programming and problem solving"
              link="https://www.linkedin.com/in/hussienibrahiem/"
            />
          </Col>
          <Col xs={6}>
            <OurCard
              src={AymanMorsy}
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
