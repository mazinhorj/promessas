import classes from './EntrarBtn.module.css';
import { BsKeyFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const EntrarBtn = () => {
  return (
    <>
      <button type='submit' className={classes.entrar_btn}>
        <Link to={"/versiculos"}>
          Abrir <BsKeyFill />
        </Link>
      </button>
    </>
  );
};

export default EntrarBtn;
