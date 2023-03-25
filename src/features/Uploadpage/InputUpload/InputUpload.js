import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { setLoaiKhach } from '../../../store/actions/Log';
import { getLoaiKhach } from '../../../store/Selector';
import PropTypes from 'prop-types';
import './Style.scss';

const InputUpload = (props) => {
  const loaikhach = useSelector(getLoaiKhach);
  const dispatch = useDispatch();

  const handleOnClick = (khach) => {
    dispatch(setLoaiKhach(khach));
  }

  return (
    <div style={{ width: '100%', height: '100%' }} className=" dropdown_inp">
      <div className="btn-group" style={{ width: '60%', marginBottom: '30px' }}>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {loaikhach}
        </button>
        <ul
          className="dropdown-menu dropdown-menu-light"
          style={{ width: '100%', backgroundColor: '#e3f2fd' }}
        >
          <li>
            <Link
              className="dropdown-item"
              to="/upload/khachthue"
              onClick={(event) => handleOnClick('Khach Thue')}
            >
              Khach Thue
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/upload/khachchothue"
              onClick={(event) => handleOnClick('Khach Cho Thue')}
            >
              Khach Cho Thue
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/upload/khachmua"
              onClick={(event) => handleOnClick('Khach Mua')}
            >
              Khach Mua
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/upload/khachban"
              onClick={(event) => handleOnClick('Khach Ban')}
            >
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

InputUpload.propTypes = {
}