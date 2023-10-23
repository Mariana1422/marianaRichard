//contador

import { useState } from "react";

export const TercerComponente = ({ value }) => {

    //hook
    const [contador, setContador] = useState(value);

    const handleClick = ()=>{
       setContador(contador + 5);
    }
  return (
    <>
     <h1>Contador</h1>
     <h3>{contador}</h3>
     <button onClick={handleClick}>➕➕</button>
    </>
  );
};
