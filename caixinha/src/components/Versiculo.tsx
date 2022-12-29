import classes from "./Versiculo.module.css";
import versiculosData from "../data/versiculos";

import { AiFillLock } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

const Versiculo = () => {
  const navigate = useNavigate();

  const umVerso = () => {
    const oVerso =
      versiculosData[0].versiculos[
        Math.floor(Math.random() * versiculosData[0].versiculos.length)
      ];
    console.log("rodou");
    console.log(oVerso);
    return oVerso;
  };

  const completo = umVerso();

  const [novoVerso, setNovoVerso] = useState(completo.versiculo);
  const [novaFonte, setNovaFonte] = useState(completo.fonte);

  const [btnCopiar, setBtnCopiar] = useState("Copiar");

  const copiar = (e: FormEvent) => {
    if (e) e.preventDefault();
    setBtnCopiar("Copiado");
    setTimeout(() => {
      setBtnCopiar("Copiar");
    }, 2000);
    const texto = `"${completo.versiculo}" \n (${completo.fonte})`;
    navigator.clipboard.writeText(texto);
    console.log(texto);
    console.log("copiado");
  };

  const novos = (e: FormEvent) => {
    if (e) e.preventDefault();

    const novoCompleto = umVerso();
    setNovoVerso(novoCompleto.versiculo);
    setNovaFonte(novoCompleto.fonte);
    return;
  };

  return (
    <>
      <div className={classes.versiculo}>
        <p>"{completo.versiculo}"</p>
        <span>{completo.fonte}</span>
      </div>
      <div className={classes.btns}>
        <button className={classes.btn} onClick={(e) => copiar(e)}>
          {btnCopiar} <MdContentCopy />
        </button>
        <button className={classes.btn} onClick={() => navigate("/")}>
          Fechar <AiFillLock />
        </button>
        <button className={classes.btn} onClick={(e) => novos(e)}>
          Próximo <TbPlayerTrackNext />
        </button>
      </div>
    </>
  );
};

export default Versiculo;
