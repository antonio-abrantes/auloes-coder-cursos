import React, {useState} from 'react';

function Mega(props){

  const [numeros, setNumeros] = useState(Array(props.qtdNumeros).fill(0))

  function gerarNumerosNaoContidos(array){
    let min = 1;
    let max = 60;
    const novoNumero = parseInt(Math.random() * (max - min)) + min;
    return array.includes(novoNumero) ? gerarNumerosNaoContidos(array) : novoNumero;
  }

  function gerarNumeros(){
    let novoArray = Array(props.qtdNumeros)
      .fill(0)
      .reduce((a, e) =>{
        let novoNumero = gerarNumerosNaoContidos(a);
        console.log(a, e, novoNumero);
        return [...a, novoNumero];
      },[])
      .sort(( a, b) => a - b);
    setNumeros(novoArray);
  }

  return (
    <div>
      <h3>Mega</h3>
      <h4>{numeros.join(' ')}</h4>
      <button onClick={gerarNumeros}>Gerar Números</button>
    </div>
  );
}

export default Mega;