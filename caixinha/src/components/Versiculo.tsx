import classes from "./Versiculo.module.css";
import versiculosData from "../data/versiculos";

import { AiFillLock } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";

const Versiculo = () => {
  const navigate = useNavigate();

  const umVerso = () => {
    const oVerso =
      versiculosData[0].versiculos[
        Math.floor(Math.random() * versiculosData[0].versiculos.length)
      ];
    console.log("rodou");
    console.log(oVerso);
    return oVerso;
  };

  const completo = umVerso();

  const copiar = () => {
    const texto = `"${completo.versiculo}" \n (${completo.fonte})`;
    navigator.clipboard.writeText(texto);
    console.log(texto);
    console.log("copiado");
    return texto;
  };

  // const compTexto = copiar();

  return (
    <>
      <div className={classes.versiculo}>
        <p>"{completo.versiculo}"</p>
        <span>{completo.fonte}</span>
      </div>
      <div className={classes.btns}>
        <button className={classes.btn} onClick={copiar}>
          Copiar <MdContentCopy />
        </button>
        <button className={classes.btn} onClick={() => navigate("/")}>
          Fechar <AiFillLock />
        </button>
        <button className={classes.btn} onClick={umVerso}>
          Próximo <TbPlayerTrackNext />
        </button>
      </div>
      {/* <div>
        <button onClick={zap}>Zap</button>
      </div> */}
    </>
  );
};

export default Versiculo;
