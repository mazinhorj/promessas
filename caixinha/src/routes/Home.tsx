import React from "react";
//import { VersiculoProps } from "../types/versiculo";

import { FaCross } from "react-icons/fa";


import classes from "./Home.module.css";
import Login from "../components/Login";


const Home = () => {
  return (
    <div className={classes.app_home}>
      <h1>Caixinha de Promessas</h1>
      <h2>
        <FaCross />
      </h2>
      <Login />
    </div>
  );
};

export default Home;