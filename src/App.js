import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordChunksForm from './WordChunksForm';


class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  render() {
    return (
      <div className="App">
      <WordChunksForm></WordChunksForm>
      </div>
    );
  }
}
export default App;
