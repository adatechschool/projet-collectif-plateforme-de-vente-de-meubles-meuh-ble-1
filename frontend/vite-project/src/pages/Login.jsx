import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

//TODO : lien vers page SignIn

function Login() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", background: "#ffb7ce" }}
    >
      <h1 style={{ width: "15rem", background: "#ffb7ce" }}>
        Connect yourself to our Meau Blée
      </h1>
      <Form
        className="w-50"
        onSubmit={(event) => {
          event.preventDefault();

          const email = event.target[0].value;
          const password = event.target[1].value;

          if (email.trim().length === 0 || password.trim().length === 0) {
            alert("All fields are required.");
          } else {
            console.log("Email:", email);
            console.log("Password:", password);
          }
        }}
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
