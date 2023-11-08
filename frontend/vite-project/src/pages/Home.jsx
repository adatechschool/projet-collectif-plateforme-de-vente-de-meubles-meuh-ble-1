import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate } from "react-router-dom";
import banniereImage from "../images/banniere.jpg";
import meuble1 from "../images/meuble1.jpg";
import meuble2 from "../images/meuble2.jpg";
import meuble3 from "../images/meuble3.jpg";
import chaises from "../images/chaises.jpg";
import luminaires from "../images/luminaires.jpg";
import piece from "../images/piece.jpg";

// Créez un tableau d'exemple d'images
const images = [
  luminaires,
  meuble2,
  meuble3,
  banniereImage,
  meuble2,
  chaises,
  meuble1,
  meuble3,
  banniereImage,
  luminaires,
];

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:${import.meta.env.VITE_APP_PORT}/products`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error("Erreur lors de la requête");
        }
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
      }
    }
    fetchData();
  }, []);

  const imageGroups = [];
  for (let i = 0; i < data.length; i += 3) {
    imageGroups.push(data.slice(i, i + 3));
  }
  // .then((response) => {console.log(response)
  //   return response.json()})
  // .then((data) => {
  //   console.log(data);
  //   if(data){
  //     setData(data);
  //   }
  // })
  // .catch((error) => console.log(error));

  // Divisez le tableau d'images en groupes de 3 images chacun
  return (
    <>
      <div>
        <Image
          style={{ width: "100vw", height: "50vh" }}
          src={banniereImage}
          fluid
        />
      </div>

      <div>
        <Carousel
          interval={null}
          style={{
            padding: "100px",
          }}
        >
          {imageGroups.map((product, index) => {
            return (
              <Carousel.Item key={index}>
                <Row className="gx-0">
                  {product.map((element, imgIndex) => {
                    return (
                      <Col key={imgIndex}>
                        <CardWithImage
                          src={`/src/images/${element.image[0]}`}
                          title={element.name}
                          text={element.description}
                          product={element}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Categories />
      </div>
    </>
  );
};

const CardWithImage = ({ src, title, text, product }) => {
  //useNavigate retourne une fonction qui permet de naviguer et de transmettre des informations par la même occasion
  // Remplacer l'objet par l'item de manière dynamique
  const navigate = useNavigate();
  const handleNavigationToProduct = () => {
    navigate("/product", { state: product });
  };
  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: "18rem" }}>
        <Image src={src} fluid style={{ width: "18rem", height: "25rem" }} />
        <div className="bg-image hover-overlay">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <Button
            onClick={handleNavigationToProduct}
            className="d-flex justify-content-center"
          >
            Voir le produit
          </Button>
        </div>
      </div>
    </div>
  );
};

const Categories = () => (
  <div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={chaises} style={{ height: "50rem" }} />
        <Card.Body>
          <Card.Title>Chaises</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={luminaires} style={{ height: "50rem" }} />
        <Card.Body>
          <Card.Title>Luminaires</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={piece} style={{ height: "50rem" }} />
        <Card.Body>
          <Card.Title>Pièces</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  </div>
);

export default Home;
