import ButtonLink from "./ButtonLink";
import { BsKeyFill } from "react-icons/bs";
import classesL from "./Login.module.css";
import classesB from "./ButtonLink.module.css";
import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import EntrarBtn from "./EntrarBtn";

const Login = () => {
  const navigate = useNavigate();
    
    return (
      <div>
        <form>
          <div className={classesL.login}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div>
            {/* <button type="submit" onClick={}>
              Teste
            </button> */}
            <ButtonLink
              tipo={"submit"}
              text={"Abrir"}
              link={"/versiculos"}
              icon={<BsKeyFill />}
              action={() => navigate('/versiculos')}
            />
          </div>
        </form>
      </div>
    );
  };

export default Login;
