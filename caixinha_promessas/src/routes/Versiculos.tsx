import React from "react";
import SairBtn from "../components/SairBtn";
import classes from "./Versiculos.module.css";
import Loader from "../components/Loader";

const Versiculos = () => {
  return (
    <div className={classes.versiculos}>
      Versiculos
      <Loader />
      <div className={classes.btns}>
        <button>Copiar</button>
        <SairBtn />
        <button>Próximo</button>
      </div>
    </div>
  );
};

export default Versiculos;
