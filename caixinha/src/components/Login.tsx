type UserProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { BsKeyFill } from "react-icons/bs";
import classes from "./Login.module.css";

import { KeyboardEvent, useState } from "react";

const Login = ({ loadUser }: UserProps) => {
  const [userName, setUserName] = useState("");
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    };

    return (
      <div>
        <form>
          <div className={classes.login}>
            {/* <label htmlFor="name">Nome:</label> */}
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
          <div>
            <button type="button" onClick={() => loadUser(userName)}>
              Entrar <BsKeyFill />
            </button>
          </div>
        </form>
      </div>
    );
  };
};

export default Login;
