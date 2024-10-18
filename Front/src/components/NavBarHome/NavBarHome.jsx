import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PiSignOutFill } from "react-icons/pi";

export default function NavbarHome() {
  return (
    <>
      <Navbar style={{ backgroundColor: "black" }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src="/src/assets/images/Photo_Doesnot_Exsist.jpeg"
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              className="d-inline-block align-center"
            />{" "}
            Navbar
          </Navbar.Brand>
          <Nav style={{ paddingLeft: "0px" }}>
            <Nav.Link
              href="/login"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              <PiSignOutFill fontSize={"24px"} /> Sign Out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
