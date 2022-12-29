import classes from "./Login.module.css";
import { BsKeyFill } from "react-icons/bs";

import { KeyboardEvent, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

  const [name, setName] = useState<string>();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      return
    };
  };


  return (
    <div>
      <form>
        <div className={classes.login}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            value={"" || name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className={classes.btns}>
          <Link to={`/caixinha/${name}`}>
            <button
              className={classes.btn_l}
              type="submit"
            >
              Entrar <BsKeyFill />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
