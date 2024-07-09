import { Card, Row, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../styles/cardFilm.css";
import Avatar from "@mui/material/Avatar";
import * as image from "../../assets/image/index";
import { Stack, Rating } from "@mui/material";

const ReviewCard = ({ film }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  //   console.log(film?.ulasans?.nama_user);
  return (
    <>
      <div className=" d-flex flex-wrap justify-content-start">
        {film?.ulasans?.map((user, idx) => (
          <Col md={3} sm={12} xs={12} key={idx} className="p-2">
            <Card
              className="rounded-3 shadow m-3"
              style={{ backgroundColor: "#222831", color: "white" }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center">
                  <Avatar className="m-2 col-3" src={image.UserPhoto} />
                  <Typography className="m-3" variant="h7" component="div">
                    {user?.nama_user}
                  </Typography>
                </Stack>
                <Rating
                  fluid
                  style={{
                    backgroundColor: "#2F3645",
                    borderRadius: 240,
                    outlineColor: "white",
                  }}
                  className="m-3 shadow rouded-5"
                  name="read-only"
                  value={user?.rating}
                  readOnly
                  precision={0.5}
                />
                <Typography variant="body1">
                  {user?.comment}
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Col>
        ))}
      </div>
    </>
  );
};

ReviewCard.propTypes = {
  film: PropTypes.object,
};

export default ReviewCard;
