import NavbarHome from "../../components/NavBarHome/NavBarHome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <Container>
        <Row>
          <Col xs={3}>
          
          </Col>
          <Col xs={9}>

          <Outlet/>
          
          </Col>
        </Row>
      </Container>
    </>
  );
}
