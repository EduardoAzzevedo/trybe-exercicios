import Image from './Image';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    const catImage = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
  return (
    <div>
      <Image source={catImage} alternativeText="Cute cat staring" />
    </div>
  );
  }
}

export default App;
