import { FaCross } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import classes from "./Home.module.css";
import classes_l from "../components/Login.module.css";
import classes_b from "./Versiculos.module.css";
import Login from "../components/Login";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.app_home}>
      <h1>Caixinha de Promessas</h1>
      <h2>
        <FaCross />
      </h2>
      <Login />
      {/* coloquei essas divs abaixo pq o componente Login está com problemas */}
      <div className={classes_l.login}>
        {/* <label htmlFor="name">Nome:</label> */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div className={classes_b.btns}>
        <button className={classes_b.btn} onClick={() => navigate("/versiculos")}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Home;