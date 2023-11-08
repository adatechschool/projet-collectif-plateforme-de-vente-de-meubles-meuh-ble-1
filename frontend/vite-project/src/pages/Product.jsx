import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Meuble from "../images/meuble1.jpg";
import Stack from "react-bootstrap/Stack";
import Table from "../images/table.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const product = location.state;

  if (!product) return "error";
  const addToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = currentCart.findIndex(
      (item) => item._id === product._id
    );

    if (productIndex !== -1) {
      // Le produit existe déjà, incrémentez la quantité
      currentCart[productIndex].quantity += 1;
    } else {
      // Le produit n'existe pas, ajoutez-le avec une quantité de 1
      const productToAdd = { ...product, quantity: 1 };
      currentCart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "calc(100vh - 56px)", width: "100wv" }}
    >
      <div style={{ display: "flex", height: "90%", width: "80%" }}>
        <Carousel
          style={{
            height: "100%",
            width: "50%",
            overflow: "hidden",
            borderRadius: "10px",
          }}
          fade
          controls={false}
        >
          <Carousel.Item
            style={{ height: "calc(100vh - 56px)", width: "100%" }}
          >
            <Image src={Table} style={{ height: "90%", width: "100%" }} fluid />
          </Carousel.Item>
          <Carousel.Item
            style={{ height: "calc(100vh - 56px)", width: "100%" }}
          >
            <Image
              src={Meuble}
              style={{ height: "90%", width: "100%" }}
              fluid
            />
          </Carousel.Item>
        </Carousel>
        <Card style={{ height: "100%", width: "50%" }}>
          <Card.Body>
            <Card.Title className="fs-1" style={{ marginBottom: "15%" }}>
              {product.name}
            </Card.Title>
            <Stack gap={4}>
              {Object.keys(product)
                .slice(1)
                .map((key, index) => {
                  if (key !== "dimensions") {
                    return (
                      <Stack direction="horizontal" gap={3} key={index}>
                        <Card.Subtitle className="fs-3 font-weight-bold text-capitalize">
                          {key}
                        </Card.Subtitle>
                        <Card.Text className="fs-5 ms-auto">
                          {product[key]}
                        </Card.Text>
                      </Stack>
                    );
                  }
                  return (
                    <Stack direction="horizontal" gap={3} key={index}>
                      <Card.Subtitle className="fs-3 ">{key}</Card.Subtitle>
                      <Card.Text className="fs-5 ms-auto">
                        H X {product[key].height} L X {product[key].width} P X{" "}
                        {product[key].length}
                      </Card.Text>
                    </Stack>
                  );
                })}
              <Button onClick={addToCart} style={{ marginTop: "75px" }}>
                Ajouter au panier
              </Button>
            </Stack>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Product;
