import Form from 'react-bootstrap/Form';


function Publish() {

 // Assurez-vous d'ajouter les dépendances nécessaires ici si besoin

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    // console.log(event.currentTarget[0].value);
    formData.append("name", event.currentTarget[0].value)
    formData.append("quantity", 6)
    formData.append("price", 5)
    formData.append("color", event.currentTarget[3].value)
    formData.append("materials", event.currentTarget[5].value)
    formData.append("image", event.currentTarget[6].files[0])
    formData.append("height",5)
    formData.append("width",2)
    formData.append("length",5)

   // Form submission happens here
   try {
    const response = await fetch(`http://localhost:3009/products`, {
      method: "POST",
      body : JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result)
     
    } else {
      console.error('Erreur lors de la requête');
    }
  } catch (error) {
    console.error('Erreur lors de la requête :', error.message);
  }
  }
  return (
    <Form onSubmit={ (event) =>onSubmitHandler(event)}>
      <Form.Group className="mb-3" controlId="product-name">
        <Form.Label>Nom du produit</Form.Label>
        <Form.Control placeholder="ecrit la"
          type="text"
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product-quantité">
        <Form.Label>Quantité</Form.Label>
        <Form.Control
          type="text"
          name="quantité"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product-prix">
        <Form.Label>Prix</Form.Label>
        <Form.Control
          type="text"
          name="prix"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product-couleur">
        <Form.Label>Couleur</Form.Label>
        <Form.Control
          type="text"
          name="couleur"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product-dimension">
        <Form.Label>Dimension</Form.Label>
        <Form.Control
          type="text"
          name="dimension"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product-matiere">
        <Form.Label>matiere</Form.Label>
        <Form.Control
          type="text"
          name="matiere"

        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product-images">
        <Form.Label>Images</Form.Label>
        <Form.Control
          type="file"
          name="images"
          accept='image/png, image/jpeg'
        />
      </Form.Group>
      <button type="submit"> envoyer</button>
    </Form>
  );
}

export default Publish;
