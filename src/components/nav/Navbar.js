import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLogIn } from '../../store/Selector';
import OffCanvas from '../offCanvas/OffCanvas';

const Navbar = () => {
  let status = useSelector(getIsLogIn);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar-light "
        style={{
          zIndex: '2',
          boxShadow: '0px 0px 20px rgba(0, 255,255, 0.5)',
          backgroundColor: '#e3f2fd'
        }}
      >
        <div className="container-fluid">
          <button className="btn" onClick={handleShow} style={{ fontSize: '20px' }}>
            V.V.T
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/homepage/khachthue">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="upload">
                  Upload
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <OffCanvas />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
