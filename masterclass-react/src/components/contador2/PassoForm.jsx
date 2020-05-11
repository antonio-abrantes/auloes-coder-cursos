import React from 'react';

function PassoForm(props){
  return (
    <div>
      <h2>Contador 2</h2>
      <label htmlFor="inputPasso">Passo: </label>
      <input id="inputPasso" type="number" 
          value={props.passo}
          onChange={e => props.onPassoChange(+e.target.value)} 
      />
    </div>
  );
}

export default PassoForm;