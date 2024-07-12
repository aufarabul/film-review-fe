import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { useMediaQuery } from "react-responsive";

const CastCarousel = ({ creditsList }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" }); // Check for 'sm' breakpoint
  const cardsPerSlide = isSmallScreen ? 1 : 4; // Set cardsPerSlide based on screen size
  //   const cardsPerSlide = 4; // Adjust this value to change the number of cards per slide

  const renderCarouselItems = () => {
    const carouselItems = [];

    for (let i = 0; i < creditsList?.length; i += cardsPerSlide) {
      const currentSlideCredits = creditsList.slice(i, i + cardsPerSlide);

      carouselItems.push(
        <Carousel.Item key={i} style={{ maxHeight: "500px" }}>
          <div className=" d-flex justify-content-around flex-wrap">
            {currentSlideCredits.map((credit) => (
              <Card
                key={credit.id}
                className=" shadow p-3 mb-5 rounded"
                style={{
                  width: "18rem",
                  backgroundColor: "#088395",
                  color: "#EBF4F6",
                  height: "380px",
                }}
              >
                <Card.Body>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                    alt={credit.name}
                    fluid
                    className="car-film"
                    variant="top"
                  />
                  <Card.Title className="mt-3">{credit.name}</Card.Title>
                  <Card.Text>
                    <strong>Sebagai: </strong> {credit.character}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      );
    }

    return carouselItems;
  };

  return (
    <Carousel className="p-5" style={{ maxHeight: "500px" }}>
      {renderCarouselItems()}
    </Carousel>
  );
};

export default CastCarousel;
