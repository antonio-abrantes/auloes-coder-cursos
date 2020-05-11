import React from "react";

function Botoes(props) {
  return (
    <div>
      <button onClick={props.onInc}>+</button>
      <button onClick={props.onDec}>-</button>
    </div>
  );
}

export default Botoes;
