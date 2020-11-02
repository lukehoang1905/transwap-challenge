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
import ChangeHistoryOutlinedIcon from "@material-ui/icons/ChangeHistoryOutlined";

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
          <div
            className="triangle card-icon "
            style={{
              display: selected === country.id ? "block" : "none",
              width: "0px",
              height: "0px",
              borderBottom: "90px solid white",
              borderLeft: "90px solid  #5954e9 ",
            }}
          >
            <span className="icon">
              <CheckSharpIcon />
            </span>
          </div>
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
