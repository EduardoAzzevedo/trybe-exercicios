import './App.css';
import React from 'react';

function testeUm() {
  console.log('Click Teste Um!');
}

function testeDois() {
  console.log('Click Teste Dois!');
}

function testeTres() {
  console.log('Click Teste Três!');
}

class App extends React.Component { // fazer uma div pra cada botão não funciona.
  render(){
  return (
    <div>
      <button onClick={testeUm}> Teste 1</button>
      <button onClick={testeDois}> Teste 2</button>
      <button onClick={testeTres}> Teste 3</button>
    </div>
    );
  }
}

export default App;
