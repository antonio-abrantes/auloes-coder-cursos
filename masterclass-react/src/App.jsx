import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Contador2 from "./components/contador2/Contador";
import Mega from "./components/mega/Mega";

export default props => {
  return (
    <div className="App">

      <h1>Aulão de React da Coder</h1>

      <div className="Cards">
      <Card titulo="#12 - Mega Sena" color="#E94C6F">
        <Mega qtdNumeros={8}></Mega>
      </Card>

      <Card titulo="#11 - Contador 2" color="#FA6900">
        <Contador2 passo={10} valorInicial={100}></Contador2>
      </Card>

      <Card titulo="#10 - Contador" color="#9C0F5F">
        <Contador passo={10} valorInicial={100}></Contador>
      </Card>

      <Card titulo="#09 - Input" color="#008BBA">
        <Input></Input>
      </Card>

      <Card titulo="#08 - Comunicação indireta" color="#000">
        <Super></Super>
      </Card>

      <Card titulo="#07 - Comunicação direta" color="#E94C6F">
        <Pai sobrenome="Abrantes"></Pai>
      </Card>

      {/* <Card titulo="#0X - Componente X" color="#E94C6F">
        Conteudo
      </Card>

      <Card titulo="#0X - Componente X" color="#008BBA">
        Conteudo
      </Card> */}

      <Card titulo="#04 - Repetiçao" color="#FA6900">
        <Repeticao></Repeticao>
      </Card>

      <Card titulo="#03 - Componente com filhos" color="#D96459">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Antonio</li>
            <li>Fulano</li>
            <li>Ciclano</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 - Componente com parametro" color="#92B06A">
        <ComParametro
          titulo="Este é o titulo"
          subtitulo="Este é o subtitulo"
        ></ComParametro>
        <ComParametro
          titulo="Segundo titulo"
          subtitulo="Segundo subtitulo"
        ></ComParametro>
      </Card>
      <Card titulo="#01 - Primeiro componente" color="#FF85CB">
        <Primeiro></Primeiro>
      </Card>
      </div>
    </div>
  );
};
