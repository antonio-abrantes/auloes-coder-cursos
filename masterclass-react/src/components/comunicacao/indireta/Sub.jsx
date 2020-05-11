import React from 'react';

function Sub(props){
  return (
    <div>
      <button onClick={()=>{
        props.onClicar(Math.random(), 'Gerado')
      }}>Alterar</button>
    </div>
  );
}

export default Sub;