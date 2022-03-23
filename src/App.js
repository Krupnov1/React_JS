import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Message } from './components/Message/Message';

/*Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст
(константу).*/

const text = 'My path is unknown';

function App() {
  return (
    <div className="App">
      <Message text = {text}/>
    </div>
  );
}

export default App;


/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header>*/