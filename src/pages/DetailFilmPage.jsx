import * as React from "react";
import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Image,
  Card,
  Carousel,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getFilm,
  getCast,
  fetchMovieTrailer,
  getProvider,
} from "../redux/actions/film";
import { fetchMovieCredits } from "../redux/actions/cast";
import { Box, Skeleton, Rating, Typography } from "@mui/material";
import CardReview from "../components/CardReview/CardReview";
import InputReview from "../components/Input/InputReview";
import "../styles/scroll.css";
import CastCarousel from "../components/CastCard/castCard";
const detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { film } = useSelector((state) => state?.film);
  const [showVideo, setShowVideo] = useState(false);
  const ulasanState = useSelector((state) => state.ulasan);
  const credits = useSelector((state) => state?.credits);
  const error = useSelector((state) => state?.error);
  const [creditsList, setCreditsList] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [provider, setProviderList] = useState([]);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const ratings = film?.ulasans?.map((ulasan) => ulasan.rating) || [];
  const totalRating = ratings.reduce((acc, num) => acc + num, 0);
  const average =
    ratings.length > 0 ? (totalRating / ratings.length).toFixed(1) : "0.0";
  const idTmdb = film?.id_tmdb;
  const mediaType = film?.type;
  useEffect(() => {
    const fetchData = async () => {
      dispatch(getFilm(navigate, id, setIsLoading));
      dispatch(getCast(setCreditsList, idTmdb, mediaType));
      dispatch(getProvider(setProviderList, idTmdb, mediaType));

      try {
        await fetchMovieTrailer(setTrailer, idTmdb, mediaType);
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
      }
    };

    fetchData();
  }, [
    dispatch,
    id,
    navigate,
    ulasanState,
    setCreditsList,
    idTmdb,
    mediaType,
    setTrailer,
    setProviderList,
    setIsLoading,
  ]);
  const loadingbar = (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton
        className="m-5"
        variant="rectangular"
        width={210}
        height={118}
      />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
  const embeddedVideo = (
    <>
      {trailer ? (
        <div className="responsive-iframe">
          <iframe
            rounded // Assuming this is a custom class, remove if not needed
            width={460}
            height={250}
            src={`https://www.youtube.com/embed/${trailer}`}
            title=""
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ) : (
        <p style={{ color: "white" }}>Maaf, trailer belum tersedia</p>
      )}
    </>
  );
  let providerLogo;
  if (provider?.ID?.flatrate) {
    providerLogo = provider?.ID?.flatrate?.find(
      (item) => item.logo_path
    )?.logo_path;
  } else {
    providerLogo = provider?.ID?.ads?.find((item) => item.logo_path)?.logo_path;
  }
  return (
    <>
      <Row>
        <Col md={6} className=" d-flex justify-content-center">
          <Container className=" d-flex justify-content-center">
            {isLoading ? (
              loadingbar
            ) : (
              <Image
                style={{ maxHeight: "500px" }}
                fluid
                className="rounded-4 m-5 "
                src={film?.image_film}
              />
            )}
          </Container>
        </Col>
        <Col
          md={6}
          className=" d-flex justify-content-center align-items-center"
        >
          <Container className="">
            <h4
              style={{ color: "white" }}
              className="d-flex justify-content-center"
            >
              {film?.nama_film}
            </h4>
            <p style={{ color: "white", fontWeight: "800" }}>Sutradara :</p>
            <p style={{ color: "white" }}>{film?.sutradara}</p>
            <p style={{ color: "white", fontWeight: "800" }}>Tahun :</p>
            <p style={{ color: "white" }}>{film?.tahun}</p>
            <p style={{ color: "white", fontWeight: "800" }}>Genre :</p>
            <p style={{ color: "white" }}>{film?.genre?.nama_genre}</p>
            <p style={{ color: "white", fontWeight: "800" }}>Sipnosis :</p>
            <p style={{ color: "white" }}>{film?.description}</p>
            <Button
              variant="outline-light"
              className="rounded-5 d-flex justify-content-center"
              onClick={toggleModal}
            >
              {/* {showModal ? "Close Tralier" : "Watch Trailer"} */}
              Watch Trailer
            </Button>
          </Container>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6} className=" d-flex justify-content-center">
          <Container className=" d-flex justify-content-center">
            <Card
              fluid
              className="text-center m-5"
              style={{ backgroundColor: "#222831", color: "white" }}
            >
              <Card.Header style={{ color: "#37B7C3" }}>
                BioskopNarasi Rating
              </Card.Header>
              <Card.Body>
                <h1>{parseFloat(average)}/5</h1>

                <Rating
                  name="read-only"
                  value={parseFloat(average)}
                  readOnly
                  precision={0.5}
                />
              </Card.Body>
              <Card.Footer className="">
                {film?.ulasans?.length == 0
                  ? "Belum ada Ulasan"
                  : `${film?.ulasans?.length} ulasan`}{" "}
              </Card.Footer>
            </Card>
          </Container>
        </Col>
        <Col md={6} className="row d-flex justify-content-center">
          <h3
            className="d-flex justify-content-center"
            style={{ fontWeight: "bold", color: "#37B7C3" }}
          >
            Dapat anda saksikan di :
          </h3>
          <p className="d-flex justify-content-center">
            <Image
              style={{ maxHeight: "150px" }}
              fluid
              className="rounded-4 mt-5 "
              src={`https://image.tmdb.org/t/p/w500${providerLogo}`}
            />
          </p>
          <h4
            className="d-flex justify-content-center"
            style={{ color: "#37B7C3" }}
          >
            {
              provider?.ID?.flatrate?.find((item) => item.provider_name)
                ?.provider_name
            }
          </h4>
          <div className="m-0">
            <Modal
              dialogClassName="custom-modal"
              show={showModal}
              onHide={toggleModal}
              centered
              aria-labelledby="contained-modal-title-vcenter"
              className="d-flex justify-content-center"
            >
              <div className="p-3" style={{ backgroundColor: "black" }}>
                {embeddedVideo}
              </div>
            </Modal>{" "}
          </div>
        </Col>
      </Row>
      <div>
        <h2
          className="mx-5 my-2"
          style={{ fontWeight: "bold", color: "#37B7C3" }}
        >
          Pemeran/Cast
        </h2>
      </div>
      <Row>
        <CastCarousel creditsList={creditsList} />
      </Row>
      <div>
        <h2
          className="mx-5 my-3"
          style={{ fontWeight: "bold", color: "#37B7C3" }}
        >
          Ulasan
        </h2>
      </div>
      {film?.ulasans == 0 ? (
        <Container>
          <h4
            className="mx-5 my-5 d-flex justify-content-center"
            style={{ fontWeight: "bold", color: "#37B7C3" }}
          >
            Belum ada Ulasan
          </h4>
        </Container>
      ) : (
        <Row className="cardReview my-4">
          <CardReview film={film} />
        </Row>
      )}

      <Container className="mt-5 my-5">
        <InputReview id={film?.id} />
      </Container>
    </>
  );
};

export default detail;
