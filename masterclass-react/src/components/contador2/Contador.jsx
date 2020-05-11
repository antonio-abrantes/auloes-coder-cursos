import React from 'react';
import './Contador.css';
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

class Contador extends React.Component{
  // state = {
  //   passo: this.props.passo || 1,
  //   valor: this.props.valorInicial || 0
  // }
  constructor(props){
    super(props);
    this.state = {
      passo: props.passo || 1,
      valor: props.valorInicial || 0
    }
  }

  inc = ()=>{
    this.setState({
      valor: this.state.valor + this.state.passo
    });
  }

  dec = ()=>{
    this.setState({
      valor: this.state.valor - this.state.passo
    });
  }

  mudarPasso = (novoPasso)=>{
    this.setState({
      passo: novoPasso
    });
  }

  render(){
    return (
      <div className="Contador">

          <PassoForm
            passo={this.state.passo}
            onPassoChange={this.mudarPasso}
          ></PassoForm>

          <Display valor={this.state.valor} ></Display>

          <Botoes
            onInc={this.inc}
            onDec={this.dec}
          ></Botoes>

      </div>
    );
  }
}

export default Contador;