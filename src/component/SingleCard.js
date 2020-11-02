import React, { useEffect } from "react";
import { Card, CardActionArea, CardMedia, Grid } from "@material-ui/core";
import "./SingleCard.css";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";

const SingleCard = ({ id, selected, handleSelect }) => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card
        className={`country-card ${
          selected === id ? "country-card-selected" : "hidden"
        }`}
      >
        <CardActionArea onClick={() => handleSelect(id)}>
          <CheckSharpIcon
            className="card-icon"
            style={{ display: selected === id ? "flex" : "none" }}
          />{" "}
          <CardMedia
            component="img"
            alt="country"
            height="140"
            image="https://e7.pngegg.com/pngimages/647/917/png-clipart-minato-namikaze-rasengan-goku-naruto-uzumaki-goku-blue-sphere-thumbnail.png"
            style={{ margin: "0" }}
          />
          <p>{id}</p>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SingleCard;
