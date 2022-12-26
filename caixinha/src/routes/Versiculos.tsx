import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import classes from "./Versiculos.module.css";
import { AiFillLock } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";
import VersiculosData from '../data/versiculos';
console.log(VersiculosData);

import { useNavigate } from "react-router-dom";


const Versiculos = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.versiculos}>
      <h1>
        Olá, <span>Matheus</span>!
      </h1>
      <h2>Aqui está um versículo para você.</h2>
      {/* <Loader /> */}
      <div className={classes.versiculo}>
        <p>
          "Antes, santificai a Cristo, como Senhor, em vosso coração; e estai
          sempre preparados para responder com mansidão e temor a qualquer que
          vos pedir a razão da esperança que há em vós."
        </p>
        <span>1 Pedro 3:15</span>
      </div>
      <div className={classes.btns}>
        <button className={classes.btn} onClick={() => console.log("copiado")}>
          Copiar <MdContentCopy />
        </button>
        <button className={classes.btn} onClick={() => navigate(-1)}>
          Fechar <AiFillLock />
        </button>
        <button className={classes.btn} onClick={() => console.log("próximo verículo")}>
          Próximo <TbPlayerTrackNext />
        </button>
      </div>
    </div>
  );
};

export default Versiculos;
