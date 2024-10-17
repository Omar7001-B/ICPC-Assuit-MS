import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
     <Navbar style={{backgroundColor:"black"}} data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/src/assets/Images/ICPC-Logo.png"
              width="35"
              height="35"
              className="d-inline-block align-center"
            />{' '}
            ICPC Assiut Community
          </Navbar.Brand>
          <Nav className="me-auto mb-1">
            <Nav.Link href="#aboutus" className='ms-3'>About Us</Nav.Link>
            <Nav.Link href="#founders" className='ms-2'>Founders</Nav.Link>
            <Nav.Link href="#developers" className='ms-2'>Developers</Nav.Link>
            <Nav.Link href="#contactus" className='ms-2'>Contact Us</Nav.Link>
            <Nav.Link href="/login" style={{marginLeft:"450px"}}>Login</Nav.Link>
            <Nav.Link href="/signup" className='ms-2'>Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
