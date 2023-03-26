import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import ErrorPage from './components/errorPage/ErrorPage';
import Navbar from './components/nav/Navbar';
import Homepage from './features/Homepage/Homepage';
import KhachBan from './features/Homepage/khachFilter/khachban';
import KhachChoThue from './features/Homepage/khachFilter/khachchothue';
import KhachMua from './features/Homepage/khachFilter/khachmua';
import KhachThue from './features/Homepage/khachFilter/khachthue';
import Login from './features/Loginpage/Homepage';
import FormKhach from './features/Uploadpage/InputUpload/formKhach/FormKhach';
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
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />} />
            {isLoggedIn ? (
              <>
                <Route path="/homepage" element={<Homepage />}>
                  <Route path="/homepage/khachthue" element={<KhachThue />} />
                  <Route path="/homepage/khachban" element={<KhachBan />} />
                  <Route path="/homepage/khachchothue" element={<KhachChoThue />} />
                  <Route path="/homepage/khachmua" element={<KhachMua />} />
                </Route>
                <Route path="/upload" element={<Upload />}>
                  <Route path="/upload/khachthue" element={<FormKhach Donvi={'Trieu'} />} />
                  <Route path="/upload/khachmua" element={<FormKhach Donvi={'Ty'} />} />
                  <Route path="/upload/khachban" element={<FormKhach Donvi={'Ty'} />} />
                  <Route path="/upload/khachchothue" element={<FormKhach Donvi={'Trieu'} />} />

                  <Route path="/upload/" element={<FormKhach Donvi={'Trieu'} />} />
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
