import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Image, Row, Col, Form, Button } from "react-bootstrap";

import * as image from "../../assets/image";

function DarkVariantExample() {
  return (
    <Row>
      <div className="col-md-6 my-auto p-5">
        <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>
          Halo selamat datang di IndoMove
        </h1>
        <p style={{ color: "#EBF4F6" }}>
          Bergabunglah dengan komunitas pecinta film Indonesia, bagikan review
          dan rekomendasi film favorit Anda
        </p>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </div>
      <div className="col-md-6">
        <Container className="rounded-4 ">
          <Carousel
            className="d-flex justify-content-center m-4 rounded-3"
            style={{ borderRadius: "20px" }}
          >
            <Carousel.Item style={{ height: "500px" }}>
              <Image
                className="d-block w-100 rounded-3"
                style={{ objectFit: "scale-down" }}
                src={image.menantuSinting}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <Image
                className="d-block w-100"
                src={image.menantuSinting}
                style={{ objectFit: "cover" }}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <Image
                className="d-block w-100"
                src={image.menantuSinting}
                style={{ objectFit: "cover" }}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </Row>
  );
}

export default DarkVariantExample;
