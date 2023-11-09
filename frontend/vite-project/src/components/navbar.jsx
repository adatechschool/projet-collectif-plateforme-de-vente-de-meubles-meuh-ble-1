import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import React from "react";
import { MDBBtn, MDBIcon, MDBBadge } from "mdb-react-ui-kit";

//TODO :
// Si user = admin => PP ou bouton lien vers interface admin

const NavigationBar = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const cart = JSON.parse(localStorage.getItem("cart"));
const adminToken = JSON.parse(localStorage.getItem("admin"))
  const handleLogout = () => {
    // Supprimez le token du localStorage
    localStorage.removeItem("token");

    // Redirigez l'utilisateur vers la page de connexion ou une autre page si nécessaire
    navigate("/login");
  };

  if (!token) {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Meuh-Blé</Navbar.Brand>
          </Container>
          {(adminToken || token) ?
          <Button
          variant="danger"
          style={{ marginRight: "2rem" }}
          href="/"
          onClick={()=> {
            if(adminToken) localStorage.removeItem("admin")
            if(token) localStorage.removeItem("token")
          }}
        >
          déconnecter
        </Button>
          :
          <Button
            variant="primary"
            style={{ marginRight: "2rem" }}
            href="/login"
          >
            Login
          </Button>}
          { adminToken && <Button
            variant="primary"
            style={{ marginRight: "2rem" }}
            href="/admin"
          >
            Admin
          </Button>

          }
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Meuh-Blé</Navbar.Brand>
          </Container>
          <MDBBtn
            style={{ backgroundColor: "#817c79", marginRight: "0.5rem" }}
            href="/cart"
          >
            <MDBIcon fas icon="shopping-cart" />
            {cart !== null ? (
              <MDBBadge color="danger" className="ms-2">
                {cart.length}
              </MDBBadge>
            ) : null}
          </MDBBtn>
          <Button
            variant="primary"
            style={{ marginRight: "2rem" }}
            href="/login"
            onClick={handleLogout}
          >
            Logout
          </Button>{" "}
        </Navbar>
      </>
    );
  }
};

export default NavigationBar;
