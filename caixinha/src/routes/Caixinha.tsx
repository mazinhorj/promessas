import Loader from "../components/Loader";
import classes from "./Caixinha.module.css";



import User from "../components/User";
import Versiculo from "../components/Versiculo";

import { useNavigate } from "react-router-dom";

const Caixinha = () => {


  return (
    <div>
      <div className={classes.caixinha}>
        <User />

        <Versiculo />

        {/* <Loader /> */}

        
      </div>
    </div>
  );
};

export default Caixinha;
