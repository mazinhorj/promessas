import Loader from "../components/Loader";
import classes from "./Versiculos.module.css";

import { AiFillLock } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";

import User from "../components/User";
import Versiculo from "../components/Versiculo";

import { useNavigate } from "react-router-dom";

const Versiculos = () => {

  const navigate = useNavigate();

  
  return (
    <div>
      <div className={classes.versi}>
        <User />
        {/* <Loader /> */}
        <Versiculo />
        <div className={classes.btns}>
          <button className={classes.btn} onClick={() => console.log("copiado")}>
            Copiar <MdContentCopy />
          </button>
          <button className={classes.btn} onClick={() => navigate(-1)}>
            Fechar <AiFillLock />
          </button>
          <button
            className={classes.btn}
            onClick={() => console.log("próximo verículo")}
          >
            Próximo <TbPlayerTrackNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Versiculos;
