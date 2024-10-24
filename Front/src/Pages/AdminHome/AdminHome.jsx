import NavBarHome from "../../components/NavBarHome/NavBarHome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import SideBarAdminHome from "../../components/SideBarAdminHome/SideBarAdminHome";

export default function AdminHome() {
  return (
    <>
      <NavBarHome />
      <Container style={{ margin: "0px", width: "100vw" }}>
        <Row>
          <Col xs={3} style={{ padding: "0px" ,backgroundColor:"black"}}>
            <SideBarAdminHome/>
          </Col>
          <Col xs={9} style={{ padding: "0px 0px" }}>
            <div
              style={{
                color: "#dfdfdf",
                backgroundColor: "black",
                width: "77.4vw",
                minHeight: "100vh",
                boxShadow:
                  "-5px 0px 70px 0px red,inset 60px 0px 70px -60px red",
              }}
            >
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
