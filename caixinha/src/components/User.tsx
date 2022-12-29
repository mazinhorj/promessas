import classes from './User.module.css';
import { useParams } from 'react-router-dom';

const User = () => {

  const { name } = useParams();

  return (
    <div className={classes.user}>
      <h1>
        Olá, <span>{name === "undefined" ? "visitante" : name}</span>!
      </h1>
      <h2>Aqui está um versículo para você.</h2>
    </div>
  );
}

export default User