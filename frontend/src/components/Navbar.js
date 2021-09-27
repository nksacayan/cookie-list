import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MyNavbar() {
  return (
    <Navbar
      variant="dark"
      bg="dark"
      expand="lg"
      className="justify-content-center"
    >
      <Navbar.Brand href="/">The Cookie List</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/userInfo">User</Nav.Link>
    </Navbar>
  );
}

export default MyNavbar;
