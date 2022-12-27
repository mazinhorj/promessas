import Login from "../components/Login";

import { FaCross } from "react-icons/fa";
import classes from "./Home.module.css";

import { UserProps } from "../types/user";
import { useState } from "react";

import versiculosData from '../data/versiculos';

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const loadUser = async (userName: string) => {
    setUser(null);
    const res = user;
    const dados = res;
  };

  return (
    <div className={classes.app_home}>
      <h1>Caixinha de Promessas</h1>
      <h2>
        <FaCross />
      </h2>
      <Login loadUser={loadUser} />
    </div>
  );
};

export default Home;
