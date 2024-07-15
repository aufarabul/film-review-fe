import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";

function quotes() {
  return (
    <div
      className="my-1 d-flex justify-content-center"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <Carousel
        className="d-flex justify-content-center"
        style={{ maxWidth: "800px" }}
      >
        <Carousel.Item interval={4000}>
          <div>
            {" "}
            {/* Add for Bootstrap styling */}
            <Container
              style={{
                maxWidth: "790px",
                backgroundColor: "#222831",
                color: "white",
              }}
              className="m-3 p-5  text-center  rounded-3"
            >
              <h3 className="m-5" style={{ color: "#37B7C3" }}>
                Usmar Ismail - Bapak Film Indonesia
              </h3>
              <p as="p" className="col-lg-8 mx-auto fs-5">
                "Film adalah alat yang ampuh untuk mencerminkan kehidupan dan
                budaya bangsa."
              </p>
              <div className="d-inline-flex gap-2 mb-5"></div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div>
            {" "}
            {/* Add for Bootstrap styling */}
            <Container
              style={{
                maxWidth: "800px",
                backgroundColor: "#222831",
                color: "white",
              }}
              className="m-3 p-5 text-center  rounded-3"
            >
              <h3 className="m-5" style={{ color: "#37B7C3" }}>
                Mira Lesmana - Produser Film dan Aktris
              </h3>
              <p as="p" className="col-lg-8 mx-auto fs-5">
                "Film Indonesia haruslah menjadi alat untuk membangun rasa
                nasionalisme dan persatuan bangsa."
              </p>
              <div className="d-inline-flex gap-2 mb-5"></div>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div>
            {" "}
            {/* Add for Bootstrap styling */}
            <Container
              style={{
                maxWidth: "800px",
                backgroundColor: "#222831",
                color: "white",
              }}
              className="m-3 p-5 text-center  rounded-3"
            >
              <h3 className="my-5" style={{ color: "#37B7C3" }}>
                Wim Umboh - Sutradara dan Produser Film
              </h3>
              <p as="p" className="col-lg-8 mx-auto fs-5">
                "Masyarakat Indonesia perlu lebih menghargai film Indonesia dan
                menonton karya-karya yang dihasilkan oleh sineas lokal."
              </p>
              <div className="d-inline-flex gap-2 mb-5"></div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default quotes;
