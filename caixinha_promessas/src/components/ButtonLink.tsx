import React from "react";
import { MouseEvent } from "react";
import { ButtonLinkProps } from "../types/buttonLinks";
import { Link } from "react-router-dom";
import classes from "./ButtonLink.module.css";


const ButtonLink = ({ text, link, icon, action, tipo }: ButtonLinkProps) => {
  const clickAction = (e: MouseEvent) => {
    action(e);
  }
  return (
    <>
      <button type={tipo} className={classes.btn_link} onClick={clickAction}>
        <Link to={link}>
          <>
            {text} {icon}
          </>
        </Link>
      </button>
    </>
  );
};

export default ButtonLink;
