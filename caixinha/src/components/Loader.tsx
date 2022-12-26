import React from "react";
import { FaSpinner } from "react-icons/fa";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.load_div}>
      <FaSpinner className={classes.loader} />
    </div>
  );
};

export default Loader;
