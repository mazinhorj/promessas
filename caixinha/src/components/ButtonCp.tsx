import React, { FormEvent, useState } from 'react'
import { MdContentCopy } from 'react-icons/md';

type BtnProps = {
  classe: any;
  action: any;
}

const ButtonCp = ({classe, action}: BtnProps) => {
  const [btnCopiar, setBtnCopiar] = useState("Copiar");

  const handleAction = (e: FormEvent) => {
    if (e) e.preventDefault();
    action(e);
    const btnCp = () => {
      setBtnCopiar("Copiado");
      setTimeout(() => {
        setBtnCopiar("Copiar");
      }, 2000);
      return;
    };
    btnCp();
  };

  

  return (
    <div>
      <button onClick={handleAction} className={classe}>
        {btnCopiar} <MdContentCopy />
      </button>
    </div>
  );
}

export default ButtonCp