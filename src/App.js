import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import ErrorPage from './components/errorPage/ErrorPage';
import Navbar from './components/nav/Navbar';
import Homepage from './features/Homepage/Homepage';
import Login from './features/Loginpage/Homepage';
import Upload from './features/Uploadpage/Upload';
import { getIsLogIn } from './store/Selector';

function App() {
  const isLoggedIn = useSelector(getIsLogIn);
  

  useEffect(() => {
    // handle any side effects here if needed
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Routes >
            <Route path='/' element={<Login />} />
            {isLoggedIn ? (
              <>
                <Route path='/homepage' element={<Homepage />} />
                <Route path='/news' element={<Homepage />} />
              </>
            ) : (
              <Route path='/err' element={<ErrorPage />} />
            )}
            <Route path='/upload' element={<Upload />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
