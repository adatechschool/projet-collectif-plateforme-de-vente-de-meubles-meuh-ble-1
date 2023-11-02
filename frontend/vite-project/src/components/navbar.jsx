import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Meuh-Blé</Navbar.Brand>
        </Container>
        <Button variant="primary" style={{ marginRight: "2rem" }}>
          Login/Logout
        </Button>{" "}
      </Navbar>
    </>
  );
};

export default NavigationBar;
