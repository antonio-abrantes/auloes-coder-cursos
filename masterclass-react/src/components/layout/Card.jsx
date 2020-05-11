import React from 'react';
import './Card.css';

export default (props)=>{
  return(
    <div 
      className="card"
      style={{borderColor: props.color || '#000'}}  >
      <div className="conteudo">
        {props.children}
      </div>
      <div  
          className="footer" 
          style={{backgroundColor: props.color || '#000'}}>
        {props.titulo}
      </div>
    </div>
  );
}