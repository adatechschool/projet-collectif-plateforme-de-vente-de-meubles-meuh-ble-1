import Carousel from "react-bootstrap/Carousel";
import Image from 'react-bootstrap/Image';
import Meuble from "../images/meuble1.jpg";
import Stack from "react-bootstrap/Stack"
import Table from "../images/table.jpg"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"


const Product = () => {
  
  const exempleMeuble = {
    name: "Table",
    quantity: 5,
    price: 150.99,
    couleur: "Marron",
    dimensions: {
      height: 80,
      width: 120,
      length: 180
    },
    materiaux: "Bois",
    categorie: "Mobilier de salon",
  };


  return <div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 56px)", width: "100wv"}}>
    <div style={{ display: "flex", height: "90%", width: "80%"}} >
      <Carousel style={{ height: "100%", width: "50%", overflow: "hidden", borderRadius: "10px"}} fade controls={false}>
        <Carousel.Item style={{ height: "calc(100vh - 56px)", width: "100%"}} >
          <Image  src={Table} style={{ height: "90%", width: "100%"}} fluid />
        </Carousel.Item>
        <Carousel.Item style={{ height: "calc(100vh - 56px)", width: "100%"}}>
          <Image src={Meuble} style={{ height: "90%", width: "100%"}} fluid />
        </Carousel.Item>
      </Carousel>
      <Card style={{ height: "100%", width: "50%"}}>
        <Card.Body>
          <Card.Title className="fs-1" style={{marginBottom: "15%"}}>
            {exempleMeuble.name}
          </Card.Title>
          <Stack gap={4}>
            {
              Object.keys(exempleMeuble).slice(1).map((key, index) => {
                if(key !== "dimensions"){
                return <Stack direction="horizontal" gap={3} key={index}>
                <Card.Subtitle className="fs-3 font-weight-bold text-capitalize" >{key}</Card.Subtitle>
                <Card.Text className="fs-5 ms-auto">{exempleMeuble[key]}</Card.Text>
                </Stack>
                }
                return <Stack direction="horizontal" gap={3} key={index}>
                  
                  <Card.Subtitle className="fs-3 ">{key}</Card.Subtitle>
                      <Card.Text className="fs-5 ms-auto">H X {exempleMeuble[key].height} L X {exempleMeuble[key].width} P X {exempleMeuble[key].length}</Card.Text>
                </Stack>
              })
            }
            <Button style={{marginTop: "75px"}}>Ajouter au panier</Button>
            </Stack>
        </Card.Body>
      </Card>
    </div>
  </div>;
};

export default Product;
