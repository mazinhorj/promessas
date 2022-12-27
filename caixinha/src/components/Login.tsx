type LoginProps = {
  loadUser: (userName: string) => Promise<void>;
};

import classes from "./Login.module.css";
import { BsKeyFill } from 'react-icons/bs';
import { useState, KeyboardEvent } from "react";

const Login = ({ loadUser }: LoginProps) => {
  const [userName, setUserName] = useState("");
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
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
              required
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className={classes.btns}>
            <button
              className={classes.btn_l}
              type="button"
              onClick={() => loadUser(userName)}
            >
              Entrar <BsKeyFill />
            </button>
          </div>
        </form>
      </div>
    );
  };

export default Login;
