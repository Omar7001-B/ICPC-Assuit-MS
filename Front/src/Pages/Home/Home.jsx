import NavBarHome from "../../components/NavBarHome/NavBarHome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import SideBarHome from "../../components/SideBarHome/SideBarHome";

export default function Home() {
  return (
    <>
      <NavBarHome />
      <Container style={{margin:"0px"}}>
        <Row>
          <Col xs={3}>
          <SideBarHome/>
          </Col>
          <Col xs={9}>

          <Outlet/>
          
          </Col>
        </Row>
      </Container>
    </>
  );
}
