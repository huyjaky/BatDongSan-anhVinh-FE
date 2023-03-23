import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Style.scss';

const InputUpload = () => {
  const [select, setSelect] = useState('Loai Khach');


  return (
    <div style={{ width: '100%', height: '100%' }} className=" dropdown_inp">
      <div className="btn-group" style={{ width: '60%', marginBottom: '30px' }}>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {select}
        </button>
        <ul
          className="dropdown-menu dropdown-menu-light"
          style={{ width: '100%', backgroundColor: '#e3f2fd' }}
        >
          <li>
            <Link className="dropdown-item" to="/upload/khachthue" onClick={event => setSelect('Khach Thue')}>
              Khach Thue
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/upload/khachchothue" onClick={event => setSelect('Khach Cho Thue')}>
              Khach Cho Thue
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/upload/khachmua" onClick={event => setSelect('Khach Mua')}>
              Khach Mua
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/upload/khachban" onClick={event => setSelect('Khach Ban')}>
              Khach Ban
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};



export default InputUpload;
