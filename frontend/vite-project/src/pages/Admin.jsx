import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Admin = () => {
  const [data, setData] = useState()
  const [onlineIds, setOnlineIds] = useState({})
  const [classname, setClassname] = useState()
  const [action, setAction] = useState("delete")
  const arrayOfKeys = ["name", "quantity", "price", "color", "materials", "height", "width", "length", "online"]

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
      } catch (error) {
      }  
    }
    requestProducts()
  },[])

  const handleUpdateProduct = async (e) => {
    e.preventDefault()
  const newProductToUpdate = {};
  const form = e.currentTarget
  const inputs = []
  for(let i = 0; i < form.length; i++){
    if( form[i].className === classname.split(" ")[0]){
      inputs.push(form[i])
    }
  }
   for(let i = 0; i < inputs.length; i++){
    if( inputs[i].value.trim() && inputs[i].className === classname.split(" ")[0] && arrayOfKeys[i] !== "online"){
      if(arrayOfKeys[i] === "length" || arrayOfKeys[i] === "width" || arrayOfKeys[i] === "height"){
        if(newProductToUpdate["dimensions"])
          newProductToUpdate["dimensions"][arrayOfKeys[i]] = parseInt(inputs[i].value)
        else{
        newProductToUpdate["dimensions"] = {}
        newProductToUpdate["dimensions"][arrayOfKeys[i]] = parseInt(inputs[i].value)
        }
      }else if(arrayOfKeys[i] === "price" || arrayOfKeys[i] === "quantity"){
        newProductToUpdate[arrayOfKeys[i]] = parseInt(inputs[i].value)
      }
      else {
        newProductToUpdate[arrayOfKeys[i]] = inputs[i].value
      }
    } else if(arrayOfKeys[i] === "online" && inputs[i].className === classname.split(" ")[0] && Object.keys(onlineIds).includes(classname.split(" ")[0]) !== -1){
      newProductToUpdate["online"] = inputs[i].checked
    }
  }
  if(Object.keys(newProductToUpdate).length > 0){
    newProductToUpdate["id"] = classname.split(" ")[0]
    const request = await fetch(`http://localhost:${import.meta.env.VITE_APP_PORT}/products`, {
      method: "PATCH",
      body:JSON.stringify (newProductToUpdate),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }
  }
  const handleDeleteProduct = async (event) => {
      try {
        const request = await fetch(`http://localhost:${import.meta.env.VITE_APP_PORT}/products`, {
          method: "DELETE",
          body:JSON.stringify({id: classname.split(" ")[0]}),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        const result = await request.json()
        setData(result)
      } catch (error) {
      }
  }
  return (
    <Container className="mt-4">
<form  onSubmit={(e)=> { 
if(action === "update"){
  handleUpdateProduct(e)
}else if(action === "delete"){
    handleDeleteProduct(e)
  }}
  }>
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
              <td><input className={item._id} type="text" placeholder={item.name} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={item._id}  type="number" placeholder={item.quantity} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={item._id}  type="number" placeholder={item.price} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={item._id}  type="text" placeholder={item.color} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={item._id}  type="text" placeholder={item.materials} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={item._id}  type="number" placeholder={item.dimensions.height} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={item._id}  type="number" placeholder={item.dimensions.width} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={item._id}  type="number" placeholder={item.dimensions.length} style={{width: "100%", height: "100%"}}/></td>
              <td><input className={item._id} type="checkbox" defaultChecked={item.online} onClick={(e)=>{
                const newobj = {}
                newobj[item._id] = e.currentTarget.checked 
                setOnlineIds({...onlineIds, ...newobj})
              }}/></td>
              <td>
                <Button className={item._id} onClick={(e)=>{
                  setClassname(e.currentTarget.className)
                  if(action !== "update"){
                    setAction("update")
                  }
                }} type="submit" variant="primary">Modifier</Button>{" "}
              <Button className={item._id} type="submit" onClick={(e)=> {
                setClassname(e.currentTarget.className)
                if(action !== "delete")
                setAction("delete")}} variant="danger">Supprimer</Button>{" "}
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
