import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Container,
  Grid,
} from "@material-ui/core";
import "./SingleCard.css";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";

const SingleCard = ({ country, selected, handleSelect }) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card
        className={`country-card ${
          selected === country.id ? "country-card-selected" : ""
        }`}
      >
        <CardActionArea
          onClick={() => handleSelect(country.id)}
          disabled={country.isComing}
        >
          <CheckSharpIcon
            className="card-icon"
            style={{ display: selected === country.id ? "block" : "none" }}
          />
          <Container
            className={`image-container ${country.isComing ? "blur" : " "}`}
          >
            <CardMedia
              component="img"
              alt="country"
              height="100"
              width="100"
              image={country.thumbnailUrl}
              style={{ margin: 0, objectFit: "contain" }}
              id="to-blur"
            />
            {country.isComing && (
              <Chip
                label="Comming Soon..."
                style={{ background: "#212121", color: "white" }}
                className="chip-coming"
              />
            )}
            <h3 id="to-blur">{country.name}</h3>
          </Container>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SingleCard;
