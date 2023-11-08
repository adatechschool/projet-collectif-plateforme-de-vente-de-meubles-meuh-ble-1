import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const getDynamicDate = (daysToAdd) => {
    const currentDate = new Date();
    const dynamicDate = new Date();
    dynamicDate.setDate(currentDate.getDate() + daysToAdd);
    return dynamicDate.toLocaleDateString();
  };

  useEffect(() => {
    // Charger le panier depuis le localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    // Calculer le total lorsque le panier change
    const cartTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  }, [cart]);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    // Mettre à jour le localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const ProductQuantity = ({ index }) => {
    const item = cart[index];

    const decreaseQuantity = () => {
      if (item.quantity > 1) {
        const updatedCart = [...cart];
        updatedCart[index] = { ...item, quantity: item.quantity - 1 };
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    };

    const increaseQuantity = () => {
      const updatedCart = [...cart];
      updatedCart[index] = { ...item, quantity: item.quantity + 1 };
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
      <div className="d-flex align-items-center">
        <MDBBtn onClick={decreaseQuantity}>-</MDBBtn>
        <MDBTypography tag="p" className="mx-3 mb-0">
          {item.quantity}
        </MDBTypography>
        <MDBBtn onClick={increaseQuantity}>+</MDBBtn>
      </div>
    );
  };

  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - {cart.length} item{cart.length !== 1 ? "s" : ""}
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                {cart.map((item, index) => (
                  <MDBListGroup key={index} flush>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <MDBRow>
                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                          <MDBRipple
                            rippleTag="div"
                            rippleColor="light"
                            className="bg-image rounded hover-zoom hover-overlay"
                          >
                            <img
                              src={`/src/images/${item.image[0]}`}
                              className="w-100"
                              alt={item.name}
                            />
                          </MDBRipple>
                        </MDBCol>

                        <MDBCol lg="5" md="6" className="mb-4 mb-lg-0">
                          <p>
                            <strong>{item.name}</strong>
                          </p>
                          <p>Color: {item.color}</p>
                          <p>
                            Size: {item.dimensions.height}cm x{" "}
                            {item.dimensions.width}cm x {item.dimensions.length}
                            cm
                          </p>
                        </MDBCol>

                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <ProductQuantity index={index} />
                          </div>

                          <p className="text-start">
                            <strong style={{ padding: "1.6rem" }}>
                              ${(item.price * item.quantity).toFixed(2)}
                            </strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <MDBTooltip
                          wrapperProps={{ size: "sm" }}
                          wrapperClass="me-1 mb-2"
                          title="Remove item"
                        >
                          <MDBIcon
                            fas
                            icon="trash"
                            onClick={() => removeFromCart(index)}
                            style={{ cursor: "pointer" }}
                          />
                        </MDBTooltip>
                      </div>
                    </MDBListGroupItem>
                  </MDBListGroup>
                ))}

                <hr className="my-4" />

                <MDBRow>
                  <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                    {/* Vous pouvez ajouter ici le contenu pour le deuxième produit */}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">
                  {getDynamicDate(7)} - {getDynamicDate(10)}
                </p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>${total.toFixed(2)}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>${total.toFixed(2)}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg">
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Cart;
