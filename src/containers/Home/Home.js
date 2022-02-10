import React from "react";

import Card from "../../components/UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <h1>{props.userData}</h1>
    </Card>
  );
};

export default Home;
