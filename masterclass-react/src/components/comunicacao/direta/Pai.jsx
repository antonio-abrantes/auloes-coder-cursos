import React from 'react';
import Filho from './Filho';

function Pai(props){
  return (
    <div>
      <Filho {...props}>Antonio</Filho>
      <Filho sobrenome={props.sobrenome}>Antonio</Filho>
      <Filho sobrenome="Neto">Antonio</Filho>
    </div>
  );
}

export default Pai;