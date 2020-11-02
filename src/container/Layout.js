import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SingleCard from "../component/SingleCard";

const Layout = () => {
  const [selected, setSelected] = useState(0);
  const [countries, setCountries] = useState("");

  const getData = async () => {
    let url = `https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/countries`;
    let data = await fetch(url);
    let result = await data.json();

    setCountries(result);
    console.log("===NEW GET DATA===", countries);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className="layout">
      <h1>Country selection</h1>
      <h4>Please select your register country or region:</h4>
      <Container>
        <Grid container spacing={5}>
          {countries &&
            countries.map((country) => {
              return (
                <SingleCard
                  country={country}
                  selected={selected}
                  handleSelect={handleSelect}
                />
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};

export default Layout;
