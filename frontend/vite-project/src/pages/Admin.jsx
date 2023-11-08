import React, { useState } from "react";
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
  const arrayOfKeys = ["name", "quantity", "price", "color", "materials", "height", "width", "length"]

  // useEffect(()=>{
  //   const requestProducts = async() => {
  //     try {
  //       const request = await fetch(`http://localhost:${import.meta.env.VITE_APP_PORT}/products`, {
  //           method: "GET",
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //           },
  //         })
  //         const result = await request.json()
  //         if(result){
  //           setData(result)
  //         }
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }  
  //   }
  //   requestProducts()
  // },[])

  const handleUpdateProduct = async (e) => {
    e.preventDefault()
  const newProductToUpdate = {};
  const form = e.currentTarget
   for(let i = 0; i < form.length; i++){
    if( form[i].value.trim() && form[i].className === koko.split(" ")[0]){
      if(arrayOfKeys[i] === "length" || arrayOfKeys[i] === "width" || arrayOfKeys[i] === "height" || arrayOfKeys[i] === "price" || arrayOfKeys[i] === "quantity"){
          newProductToUpdate[arrayOfKeys[i]] = parseInt(form[i].value)
      }else{
        newProductToUpdate[arrayOfKeys[i]] = form[i].value
      }
    }
    
  }
  if(Object.keys(newProductToUpdate).length < 1){
    const request = await fetch(`http://localhost:${import.meta.env.VITE_APP_PORT}/products`, {
      method: "PATCH",
      body:JSON.stringify (newProductToUpdate),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    const result = await request.json()
    console.log(result);
  }
  }

  const handleDeleteProduct = async (event) => {
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
<form  onSubmit={(e)=> { handleUpdateProduct(e)}}>
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
         
          {items?.map((item, idx) => (
            <tr key={idx}>
              <td>{idx+1}</td>
              <td><input className={idx+1} type="text" placeholder={item.nom} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={idx+1}  type="number" placeholder={5} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={idx+1}  type="number" placeholder={item.prix} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={idx+1}  type="text" placeholder={5} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={idx+1}  type="text" placeholder={5} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={idx+1}  type="number" placeholder={5} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={idx+1}  type="number" placeholder={5} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={idx+1}  type="number" placeholder={5} style={{width: "100%", height: "100%"}}/></td>
              <td className={idx+1} >En ligne</td>
              <td>
                <Button className={idx+1} onClick={(e)=>{
                  koko = e.currentTarget.className
                }} type="submit" variant="primary">Modifier</Button>{" "}
                <Button className={idx+1} type="submit" onClick={handleDeleteProduct} variant="danger">Supprimer</Button>{" "}
              </td>
            </tr>
          ))}
          
        </tbody>
      </Table>
    </form>
    </Container>
  );
};

export default Admin;
