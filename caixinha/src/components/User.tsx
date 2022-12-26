import classes from './User.module.css';

const User = () => {
  return (
    <div className={classes.user}>
      <h1>
        Olá, <span>_username_</span>!
      </h1>
      <h2>Aqui está um versículo para você.</h2>
    </div>
  );
}

export default User