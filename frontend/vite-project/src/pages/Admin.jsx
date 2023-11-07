import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState(null)

  useEffect(()=>{
    const requestProducts = async() => {
      try {
        const request = await fetch(`http://localhost:${import.meta.env.VITE_APP_PORT}/products`, {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
          if(request.data){
            setData(request.data)
          }
        
      } catch (error) {
        
      }  
    }
    requestProducts()
  },[])

  const handleUpdateProduct = async () => {
    const request = await fetch(`http://localhost:${import.meta.env.VITE_APP_PORT}/products`, {
      method: "PATCH",
      body:JSON.stringify,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }

  const handleDeleteProduct = async () => {
      try {
        const request = await fetch(`http://localhost:${import.meta.env.VITE_APP_PORT}/products`, {
          method: "DELETE",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
      } catch (error) {
        
      }
  }
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
              <td><input type="text" placeholder={item.nom} style={{width: "100%", height: "100%"}}/></td>
              <td><input type="number" placeholder={item.prix} style={{width: "100%", height: "100%"}}/></td>
              <td>{item.statut}</td>
              <td>
                <Button variant="primary">Modifier</Button>{" "}
                <Button onClick={handleDeleteProduct} variant="danger">Supprimer</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
