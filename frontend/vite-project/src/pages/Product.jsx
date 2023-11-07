import Carousel from "react-bootstrap/Carousel";
import Image from 'react-bootstrap/Image';
import Meuble from "../images/meuble1.jpg";
import Stack from "react-bootstrap/Stack"
import Table from "../images/table.jpg"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useLocation } from "react-router-dom";

const Product = () => {
const location = useLocation()
const product = location.state
console.log(product);
if(!product) return "error"

const addToCard = () => {
  //const userId = JSON.parse(localStorage.getItem("userId"))
  const currentCart = JSON.parse(localStorage.getItem("cart")) || []
  localStorage.setItem(`cart`, JSON.stringify([...currentCart, product]))
}

  return <div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 56px)", width: "100wv"}}>
    <div style={{ display: "flex", height: "90%", width: "80%"}} >
      <Carousel style={{ height: "100%", width: "50%", overflow: "hidden", borderRadius: "10px"}} fade controls={false}>
       {
          product.image.map((ele, index)=>{
            return <Carousel.Item key={index} style={{ height: "calc(100vh - 56px)", width: "100%"}}>
          <Image src={`/src/images/${ele}`} style={{ height: "90%", width: "100%"}} fluid />
        </Carousel.Item>
          })
       }
      </Carousel>
      <Card style={{ height: "100%", width: "50%"}}>
        <Card.Body>
          <Card.Title className="fs-1" style={{marginBottom: "15%"}}>
            {product.name}
          </Card.Title>
          <Stack gap={4}>
            {
              Object.keys(product).slice(1).map((key, index) => {
                console.log(key);
                if(key !== "_id" && key !== "createdAt" && key !== "updatedAt" && key !== "__v" && key !== "image"){
                if(key !== "dimensions"){
                return <Stack direction="horizontal" gap={3} key={index}>
                <Card.Subtitle className="fs-3 font-weight-bold text-capitalize" >{key}</Card.Subtitle>
                <Card.Text className="fs-5 ms-auto">{product[key]}</Card.Text>
                </Stack>
                }}else if(key === "__v"){
                  return <Stack direction="horizontal" gap={3} key={index}>
                    <Card.Subtitle className="fs-3 ">{"dimensions"}</Card.Subtitle>
                        <Card.Text className="fs-5 ms-auto">H X {product.dimensions.height} L X {product.dimensions.width} P X {product.dimensions.length}</Card.Text>
                  </Stack>
                }
              })
            }
            <Button onClick={addToCard} style={{marginTop: "75px"}}>Ajouter au panier</Button>
            </Stack>
        </Card.Body>
      </Card>
    </div>
  </div>;
};

export default Product;
