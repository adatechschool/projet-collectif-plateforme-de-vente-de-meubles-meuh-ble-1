import React from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import banniereImage from "../images/BANNIERE_meubles-1210x423.png";
import meuble1 from "../images/meuble1.jpg";
import meuble2 from "../images/meuble2.jpg";
import meuble3 from "../images/meuble3.jpg";
import chaises from "../images/chaises.jpg";
import luminaires from "../images/luminaires.jpg";
import piece from "../images/piece.jpg";

const Home = () => {
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
        <Container>
          <Carousel style={{ paddingTop: "100px" }}>
            <Carousel.Item>
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={meuble1}
                      style={{ height: "25rem" }}
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={meuble2}
                      style={{ height: "25rem" }}
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={meuble3}
                      style={{ height: "25rem" }}
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* <Carousel.Caption>
              <h5>Slide label</h5>
              <p>Description de la slide.</p>
            </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={meuble2}
                      style={{ height: "25rem" }}
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={meuble3}
                      style={{ height: "25rem" }}
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={meuble1}
                      style={{ height: "25rem" }}
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* <Carousel.Caption>
              <h5>Slide label</h5>
              <p>Description de la slide.</p>
            </Carousel.Caption> */}
            </Carousel.Item>

            {/* Ajoutez plus d'items de carrousel si nécessaire */}
          </Carousel>
        </Container>
      </div>

      <div>
        <CardGroup style={{ paddingTop: "100px" }}>
          <Card>
            <Card.Img variant="top" src={chaises} style={{ height: "50rem" }} />
            <Card.Body>
              <Card.Title>Chaises</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={luminaires}
              style={{ height: "50rem" }}
            />
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
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Home;
