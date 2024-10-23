import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PiSignOutFill } from "react-icons/pi";

export default function NavbarHome() {
  return (
    <>
      <Navbar style={{ backgroundColor: "black" ,height:"10vh",boxShadow:"0px 15px 40px 0px red"}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home" style={{fontSize:"25px",color:"#dfdfdf"}}>
            UserName
          </Navbar.Brand>
          <Nav style={{ paddingLeft: "0px" }}>
          

          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Notifications"
              style={{backgroundColor:"black",marginRight:"10px"}}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          <Nav.Link
              href="/settings"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              Settings
            </Nav.Link>


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
