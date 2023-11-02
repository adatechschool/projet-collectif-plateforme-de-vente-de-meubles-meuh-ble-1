import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Admin = () => {
  const tableStyle = {
    width: "40%",
    margin: "0 auto", // Centrer horizontalement
  };

  return (
    <>
      <Container className="mt-4" />
      <Table style={tableStyle} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Buffet</td>
            <td>120€</td>
            <td>En ligne</td>
            <td>
              <Button variant="primary">Modifier</Button>{" "}
              <Button variant="danger">Supprimer</Button>{" "}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Armoire</td>
            <td>230€</td>
            <td>En ligne</td>
            <td>
              <Button variant="primary">Modifier</Button>{" "}
              <Button variant="danger">Supprimer</Button>{" "}
            </td>{" "}
          </tr>
          <tr>
            <td>3</td>
            <td>Chaise</td>
            <td>40€</td>
            <td>A valider</td>
            <td>
              <Button variant="primary">Modifier</Button>{" "}
              <Button variant="danger">Supprimer</Button>{" "}
            </td>{" "}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Admin;
