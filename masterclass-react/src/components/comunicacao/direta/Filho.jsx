import React from 'react';

function Filho(props){
  return (
    <div>
      <h4>{props.children} {props.sobrenome}</h4>
    </div>
  );
}

export default Filho;