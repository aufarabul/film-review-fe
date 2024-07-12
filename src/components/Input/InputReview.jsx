import * as React from "react";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddUlasan } from "../../redux/actions/ulasan";
import { Rating } from "@mui/material";
function InputReview({ id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState(2);

  const rating = parseInt(value);
  const onSubmit = async (e) => {
    e.preventDefault();

    // dispatch the InputReview action
    dispatch(AddUlasan(navigate, name, id, comment, rating, setIsLoading));
  };
  console.log(rating);
  return (
    <>
      <Form
        style={{ color: "white" }}
        onSubmit={onSubmit}
        className="shadow p-3 mb-5 bg-dark rounded"
        data-bs-theme="dark"
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Rating *</Form.Label>
          <Rating
            style={{ backgroundColor: "white", borderRadius: 240 }}
            name="simple-controlled"
            className="m-4"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Comment *</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Masukkan Ulasan"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </Form.Group>
        {/* 
        <Form.Group controlId="photo" className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </Form.Group> */}
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "InputReview"}
        </Button>
      </Form>
    </>
  );
}

export default InputReview;
