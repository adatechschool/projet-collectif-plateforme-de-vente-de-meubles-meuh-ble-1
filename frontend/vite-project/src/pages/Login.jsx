import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

//TODO : lien vers page SignIn

function Login() {
  const navigate = useNavigate();

  async function log(event) {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      alert("All fields are required.");
    } else {
      console.log("Email:", email);
      console.log("Password:", password);

      try {
        console.log("dream");
        const response = await fetch(
          `http://localhost:${import.meta.env.VITE_APP_PORT}/auth`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          console.log(response);
          const result = await response.json();

          console.log(result.authToken);
          localStorage.setItem("token", JSON.stringify(result.authToken));
          // const token = JSON.parse(localStorage.getItem("token"))
          // console.log(token)
          navigate("/");
        }
      } catch (error) {
        console.log("toto", error.message);
      }
    }
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", background: "#ffb7ce" }}
    >
      <h1 style={{ width: "15rem", background: "#ffb7ce" }}>
        Connect yourself to our Meuh-Blé
      </h1>
      <Form
        className="w-50"
        onSubmit={(event) => {
          log(event);
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
