import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import ErrorPage from './components/errorPage/ErrorPage';
import Navbar from './components/nav/Navbar';
import Homepage from './features/Homepage/Homepage';
import Login from './features/Loginpage/Homepage';
import FormKhachMua from './features/Uploadpage/InputUpload/formKhachMua/FormKhachMua';
import FormKhachThue from './features/Uploadpage/InputUpload/formKhachThue/FormKhachThue';
import Upload from './features/Uploadpage/Upload';
import { setLogIn } from './store/actions/Log';
import { getIsLogIn } from './store/Selector';

function App() {
  const dispatch = useDispatch();
  var isLoggedIn = useSelector(getIsLogIn);
  if (isLoggedIn != sessionStorage.getItem('Log')) {
    // neu no khong giong sessionlocalstage thi gan lai gia tri cho no
    dispatch(setLogIn(sessionStorage.getItem('Log')));
  }

  useEffect(() => {
    // handle any side effects here if needed
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />} />
            {isLoggedIn ? (
              <>
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/news" element={<Homepage />} />
                <Route path="/upload" element={<Upload />} >
                  <Route path="/upload/khachthue" element={<FormKhachThue />} />
                  <Route path='/upload/khachmua' element={<FormKhachMua />} />
                  <Route path="/upload/" element={<FormKhachThue />} />
                </Route>
              </>
            ) : (
              <Route path="/:trash" element={<ErrorPage />} />
            )}
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
