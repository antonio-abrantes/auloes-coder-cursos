import React, {useState} from 'react';
import Sub from "./Sub";

function Super(props){

  const [texto, setTexto] = useState('Valor');
  const [num, setNum] = useState(0);
  
  function quandoClicar(valorGerado, texto){
    setNum(valorGerado);
    setTexto(texto);
    console.log('Ação!');
    console.log(valorGerado);
  }

  return (
    <div>
      <h4>{texto}: {num}</h4>
      <Sub onClicar={quandoClicar}></Sub><hr/>
      <h4>Valor</h4>
      <Sub onClicar={quandoClicar}></Sub>
    </div>
  );
}

export default Super;