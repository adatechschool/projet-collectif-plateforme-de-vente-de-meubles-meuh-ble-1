import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Signin() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: "#ffb7ce"}} >
      <h1 style={{ width:"15rem", background: "#ffb7ce"}}>Sign in to our Meau Blée</h1>
    <Form className="w-50" onSubmit={(event)=>{
          event.preventDefault()
          const firstName = event.target[0].value
          const lastName = event.target[1].value
          const email = event.target[2].value
          const password = event.target[3].value
          const retypePassword = event.target[4].value

          if (firstName.trim().length === 0 || lastName.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0 || retypePassword.trim().length === 0) {
            alert("All fields are required.");
          } else if (password !== retypePassword) {
            alert("Passwords do not match!");
          } else {
            // Proceed with form submission
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            console.log("Email:", email);
            console.log("Password:", password);
          }
          
        }}>

        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupRetypePassword">
          <Form.Label>Retype Password</Form.Label>
          <Form.Control type="password" placeholder="Retype Password" />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Submit
        </Button>
        
      </Form>

    </Container>
  );
}

export default Signin;

// Estelle was here