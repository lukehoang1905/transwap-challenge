import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import SingleCard from "../component/SingleCard";

const Layout = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className="layout">
      <h1>Country selection</h1>
      <p>Please select your register country or region:</p>
      <Container>
        <Grid container spacing={3}>
          <SingleCard id={1} selected={selected} handleSelect={handleSelect} />
          <SingleCard id={2} selected={selected} handleSelect={handleSelect} />
          <SingleCard id={3} selected={selected} handleSelect={handleSelect} />
          <SingleCard id={4} selected={selected} handleSelect={handleSelect} />
          <SingleCard id={5} selected={selected} handleSelect={handleSelect} />
        </Grid>
      </Container>
    </div>
  );
};

export default Layout;
