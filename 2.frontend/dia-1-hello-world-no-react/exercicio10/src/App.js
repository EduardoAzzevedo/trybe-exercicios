import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefasDoDia = ['Acordar', 'Colocar roupa', 'Levar esposa pro trabalho', 'Voltar pra casa']

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefasDoDia.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}
export default App;
