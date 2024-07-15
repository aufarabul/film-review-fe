import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchFilms } from "../../redux/actions/film";
import { useNavigate } from "react-router-dom";

const FilmSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { film } = useSelector((state) => state?.film);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      dispatch(searchFilms(e.target.value));
    }
  };

  const handleSelectFilm = (filmName) => {
    setSearchTerm(filmName);
    dispatch(searchFilms(filmName));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    dispatch(searchFilms(searchTerm));
  };

  return (
    <div className=" d-flex justify-content-center">
      <Form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center position-relative m-5"
        style={{ width: "500px" }}
      >
        <Form.Control
          type="search"
          placeholder="Masukkan Nama Film"
          className="me-2"
          value={searchTerm}
          onChange={handleSearch}
          aria-label="Search"
        />
        <Button variant="outline-primary" type="submit">
          Search
        </Button>
        {searchTerm && film.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              backgroundColor: "white",
              zIndex: 1000,
              border: "1px solid #ccc",
              maxWidth: "1480px",
            }}
          >
            {film.map((film) => (
              <li
                key={film.id}
                onClick={() => handleSelectFilm(film.nama_film)}
                style={{
                  cursor: "pointer",
                  padding: "5px 10px",
                }}
              >
                {film.nama_film}
              </li>
            ))}
          </ul>
        )}
      </Form>
    </div>
  );
};

export default FilmSearch;
