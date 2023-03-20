import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/loginPage/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Login />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
