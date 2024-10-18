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
              src="/Front/src/assets/Images/Hussien-Ibrahim.jpg"
              alt=""
              style={{ width: "300px", height: "300px" }}
              className="d-inline-block align-top"
            />
            Navbar
          </Navbar.Brand>
          <Nav style={{ paddingLeft: "0px" }}>
            <Nav.Link href="#home">Home</Nav.Link>
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
