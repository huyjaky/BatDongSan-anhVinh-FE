import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import TestApi from './components/TestApi';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
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
          <TestApi />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
