import React, {useState} from 'react';

function Input(props){

  // let nome = 'Antonio';
  const [nome, setNome] = useState('Antonio');

  return (
    <div>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
      <br/><h3>{nome}</h3>
    </div>
  );
}

export default Input;