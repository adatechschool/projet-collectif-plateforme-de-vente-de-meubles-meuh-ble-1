import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const items = [
  { id: 1, nom: "Buffet", prix: "120€", statut: "En ligne" },
  { id: 2, nom: "Armoire", prix: "230€", statut: "En ligne" },
  { id: 3, nom: "Chaise", prix: "40€", statut: "A valider" },
  { id: 1, nom: "Buffet", prix: "120€", statut: "En ligne" },
  { id: 1, nom: "Buffet", prix: "120€", statut: "En ligne" },
  { id: 1, nom: "Buffet", prix: "120€", statut: "En ligne" },
  { id: 1, nom: "Buffet", prix: "120€", statut: "En ligne" },
  { id: 1, nom: "Buffet", prix: "120€", statut: "En ligne" },
  { id: 1, nom: "Buffet", prix: "120€", statut: "En ligne" },
];

const Admin = () => {
  return (
    <Container className="mt-4">
      <Table
        striped
        bordered
        hover
        style={{
          width: "60%", // Vous pouvez ajuster la largeur ici (en pourcentage ou en pixels)
          margin: "0 auto", // Centrer horizontalement
        }}
      >
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
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.prix}</td>
              <td>{item.statut}</td>
              <td>
                <Button variant="primary">Modifier</Button>{" "}
                <Button variant="danger">Supprimer</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
