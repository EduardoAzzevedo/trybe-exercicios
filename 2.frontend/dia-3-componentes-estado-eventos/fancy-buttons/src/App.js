import './App.css';
import React from 'react';

class App extends React.Component { // fazer uma div pra cada botão não funciona.
  constructor() {
    super()

    this.state = {
      cliquesTest1: 0,
      cliquesTest2: 0,
      cliquesTest3: 0,
    }

    this.testeUm = this.testeUm.bind(this)
    this.testeDois = this.testeDois.bind(this)
    this.testeTres = this.testeTres.bind(this)
  }

  testeUm() {
    this.setState((estadoAnterior, _props) => ({
      cliquesTest1: estadoAnterior.cliquesTest1 + 1
    }))
    console.log('Click Teste Um!');
  }

  testeDois() {
    this.setState((estadoAnterior, _props) => ({
      cliquesTest2: estadoAnterior.cliquesTest2 + 1
    }))
  console.log('Click Teste Dois!');
  }

  testeTres() {
    this.setState((estadoAnterior, _props) => ({
      cliquesTest3: estadoAnterior.cliquesTest3 + 1
    }))
    console.log('Click Teste Três!');
  }

  render(){
  return (
    <div>
      <button onClick={this.testeUm}>{this.state.cliquesTest1}</button>
      <button onClick={this.testeDois}>{this.state.cliquesTest2}</button>
      <button onClick={this.testeTres}>{this.state.cliquesTest3}</button>
    </div>
    );
  }
}

export default App;
