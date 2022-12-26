import classes from "./Versiculo.module.css";
// import { VersiculosProps } from "../types/versiculos";
// import versiculos from "../data/versiculos";

const Versiculo = () => {


  return (
    <div className={classes.versiculo}>
      <p>
        "Como o orvalho do Hermom, que desce sobre os montes de Sião; porque ali
        o Senhor ordena a bênção e a vida para sempre."
      </p>
      <span>Salmos 133:3</span>
    </div>
  );
};

export default Versiculo;
