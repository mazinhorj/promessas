import React from "react";
import Loader from "../components/Loader";
import ButtonLink from "../components/ButtonLink";
import classes from "./Versiculos.module.css";
import { AiFillLock } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { MdContentCopy } from 'react-icons/md';

const Versiculos = () => {
  return (
    <div className={classes.versiculos}>
      <h1>Olá, _usuario_!</h1>
      <h2>Aqui está um versículo para você.</h2>
      <Loader />
      <div className={classes.btns}>
        <ButtonLink
          text={"Copiar"}
          link={"#"}
          icon={<MdContentCopy />}
          action={() => console.log('copiado')}
        />
        <ButtonLink
          text={"Fechar"}
          link={"/"}
          icon={<AiFillLock />}
          action={null}
        />
        <ButtonLink
          text={"Próximo"}
          link={"#"}
          icon={<TbPlayerTrackNext />}
          action={null}
        />
      </div>
    </div>
  );
};

export default Versiculos;
