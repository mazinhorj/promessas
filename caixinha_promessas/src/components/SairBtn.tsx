import React from "react";
import { AiFillLock } from "react-icons/ai";
import classes from "./SairBtn.module.css";
import { Link } from "react-router-dom";

const SairBtn = () => {
  return (
    <>
      <button className={classes.sair_btn}>
        <Link to={"/"}>
          Fechar <AiFillLock />
        </Link>
      </button>
    </>
  );
};

export default SairBtn;
