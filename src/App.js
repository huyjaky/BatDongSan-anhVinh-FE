import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import ErrorPage from './components/errorPage/ErrorPage';
import Navbar from './components/nav/Navbar';
import Homepage from './features/Homepage/Homepage';
import Login from './features/Loginpage/Homepage';
import { getIsLogIn } from './store/Selector';


function App() {
  let data = useSelector(getIsLogIn);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Routes >
            <Route path='/' element={<Login />} />
            {data ?
              <Route path='/homepage' element={<Homepage />} />
              :
              <Route path='/:id' element={<ErrorPage />} />
            }
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
