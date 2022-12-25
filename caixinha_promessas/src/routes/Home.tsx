import React from 'react';
import { VersiculoProps } from '../types/versiculo';

import { FaCross } from 'react-icons/fa';

import EntrarBtn from "../components/EntrarBtn";

import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.app_home}>
      <h1>Caixinha de Promessas</h1>
      <h2><FaCross /></h2>
      <EntrarBtn />
    </div>
  );
}

export default Home