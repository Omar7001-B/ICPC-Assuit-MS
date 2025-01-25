import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurCard from "../OurCard/OurCard";
import MohamedRamadan from "../../assets/Images/Mohamed-Ramadan.jpg"
import AbdulrahmanAyman from "../../assets/Images/Abdulrahman-Ayman.jpg"
import AbdelrhmanHany from "../../assets/Images/Abdelrhman-Hany.jpg"
import MohamedShamsElDeen from "../../assets/Images/Mohamed-Shams-El-Deen.jpg"
import OmarAbdelrahman from "../../assets/Images/Omar-Abdelrahman.jpg"
export default function Developers() {
  return (
    <div
      id="developers"
      style={{
        height: "2000px",
        padding: "70px 0px",
        backgroundColor: "black",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "70px",
          color: "#dfdfdf",
          textShadow:"2px 4px 5px rgb(255,255,255,0.7)"
        }}
      >
        Developers
      </p>
      <Container>
        <Row className="mb-5">
          <Col>
            <OurCard
              src={MohamedRamadan}
              alt="Mohamed Ramadan Photo"
              name="Mohamed Ramadan"
              info="Mentor at ICPC Assiut Community"
              link="https://www.linkedin.com/in/mohammed-ramadan-elaraby-097245242/"
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <OurCard
              src={AbdulrahmanAyman}
              alt="Abdulrahman Ayman Photo"
              name="Abdulrahman Ayman"
              info="ECPC Finalist and Mentor at ICPC Assiut Community"
              link="https://www.linkedin.com/in/abdulrahman-ayman-6b4230262/"
            />
          </Col>
          <Col></Col>
          <Col>
            <OurCard
              src={AbdelrhmanHany}
              alt="Abdelrhman Hany Photo"
              name="Abdelrhman Hany"
              info="2x ECPC Finalist,Vice Chairman and Mentor at ICPC Assiut Community"
              link="https://www.linkedin.com/in/abdelrhman-hany-b1b04a255/"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <OurCard
              src={MohamedShamsElDeen}
              alt="Mohamed Shams El-Deen Photo"
              name="Mohamed Shams El-Deen"
              info="Mentor at ICPC Assiut Community"
              link="https://www.linkedin.com/in/shams272/"
            />
          </Col>
          <Col>
            <OurCard
              src={OmarAbdelrahman}
              alt="Omar Abdelrahman Photo"
              name="Omar Abdelrahman"
              info="Specialist at codeforces and mentor at icpc assuit"
              link="https://www.linkedin.com/in/omar7001/"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
