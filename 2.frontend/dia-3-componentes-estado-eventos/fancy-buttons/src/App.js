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
  }

  testeDois() {
    this.setState((estadoAnterior, _props) => ({
      cliquesTest2: estadoAnterior.cliquesTest2 + 1
    }))
  }

  testeTres() {
    this.setState((estadoAnterior, _props) => ({
      cliquesTest3: estadoAnterior.cliquesTest3 + 1
    }))
  }

  mudaBackgroundBtn(clickTest) {
    if (this.state.clickTest === 0) {
      return;
    } 
    if (this.state.clickTest % 2 === 0) {
        return 'green';
      }
    //  this.state.cliquesTest2 === 0 || this.state.cliquesTest3 === 0) {

    // }
    // if (this.state.cliquesTest1 % 2 === 0) {
    //   return 'green';
    // }
    // if (this.state.cliquesTest2 % 2 === 0) {
    //   return 'green';
    // }
    // if (this.state.cliquesTest3 % 2 === 0) {
    //   return 'green';
    // }
  }

  render(){
  return (
    <div>
      <button style={ {backgroundColor: this.mudaBackgroundBtn()} } onClick={this.testeUm}>{this.state.cliquesTest1}</button>
      <button style={ {backgroundColor: this.mudaBackgroundBtn()} } onClick={this.testeDois}>{this.state.cliquesTest2}</button>
      <button style={ {backgroundColor: this.mudaBackgroundBtn()} } onClick={this.testeTres}>{this.state.cliquesTest3}</button>
    </div>
    );
  }
}

export default App;
