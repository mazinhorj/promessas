import { FaCross } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import classes_h from "./Home.module.css";
import classes from "./Versiculos.module.css";
import Login from "../components/Login";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={classes_h.app_home}>
      <h1>Caixinha de Promessas</h1>
      <h2>
        <FaCross />
      </h2>
      <Login />
      {/* coloquei essa div abaixo pq o componente Login está com problemas */}
      <div className={classes.btns}>
        <button className={classes.btn} onClick={() => navigate("/versiculos")}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Home;