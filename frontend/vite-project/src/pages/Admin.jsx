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
  const [data, setData] = useState()

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
          const result = await request.json()
          if(result){
            setData(result)
          }
        console.log(result);
      } catch (error) {
        console.log(error);
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
          width: "95%", // Vous pouvez ajuster la largeur ici (en pourcentage ou en pixels)
          margin: "0 auto", // Centrer horizontalement
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>quantité</th>
            <th>Prix</th>
            <th>Couleur</th>
            <th>Materiel</th>
            <th>Hauteur</th>
            <th>Largeur</th>
            <th>Longueur</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {data?.map((item, idx) => (
            <tr key={idx}>
              <td>{idx+1}</td>
              <td><input type="text" placeholder={item.name} style={{width: "100%", height: "100%"}}/></td>
              <td><input type="number" placeholder={item.quantity} style={{width: "100%", height: "100%"}}/></td>
              <td><input type="number" placeholder={item.price} style={{width: "100%", height: "100%"}}/></td>
              <td><input type="text" placeholder={item.color} style={{width: "100%", height: "100%"}}/></td>
              <td><input type="text" placeholder={item.materials} style={{width: "100%", height: "100%"}}/></td>
              <td><input type="number" placeholder={item.dimensions.height} style={{width: "100%", height: "100%"}}/></td>
              <td><input type="number" placeholder={item.dimensions.width} style={{width: "100%", height: "100%"}}/></td>
              <td><input type="number" placeholder={item.dimensions.length} style={{width: "100%", height: "100%"}}/></td>
              <td>En ligne</td>
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
