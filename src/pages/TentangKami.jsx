import { Row, Col, Container, Button } from "react-bootstrap";
import { useEffect } from "react";
function TentangKami() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Row>
        <Container>
          <div style={{ margin: "150px" }}>
            <h3
              className="mx-5"
              style={{
                fontWeight: "bold",
                color: "#37B7C3",
                textAlign: "center",
              }}
            >
              "Bioskop Narasi merupakan platform ulasan film dan TV series
              Indonesia bertujuan untuk menjadi platform terdepan yang
              terpercaya dan informatif, serta mendorong budaya menonton dan
              diskusi yang kritis dan positif di masyarakat Indonesia. Pengguna
              dapat aktif memberikan ulasan dan penilaian terhadap setiap judul,
              sehingga menciptakan komunitas yang saling berbagi pendapat.
              Selain itu, platform ini akan menyediakan informasi mengenai
              platform layanan streaming di mana pengguna dapat menonton
              judul-judul tersebut secara legal."
            </h3>
          </div>
        </Container>
      </Row>
    </>
  );
}

export default TentangKami;
