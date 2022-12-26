import classes from "./Login.module.css";
import { BsKeyFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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
            />
          </div>
          <div className={classes.btns}>
            <button className={classes.btn_l} type="button" onClick={() => navigate('/versiculos')}>
              Entrar <BsKeyFill />
            </button>
          </div>
        </form>
      </div>
    );
  };

export default Login;
