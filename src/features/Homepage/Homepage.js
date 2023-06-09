import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import {
  getFetch,
  getKhachBan,
  getKhachChoThue,
  getKhachMua,
  getKhachThue
} from '../../store/Selector';
import {
  setFetch,
  setKhachBan,
  setKhachChoThue,
  setKhachMua,
  setKhachThue,
  setPhuongSelect,
  setQuanSelect,
  setTenPhuong,
  setTenQuan,
  setUser
} from '../../store/actions/Log';
import './Style.scss';
import Filter from './filter/Filter';

const Homepage = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isFetch = useSelector(getFetch);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    dispatch(setTenPhuong('Phuong'));
    dispatch(setTenQuan('Quan'));
    dispatch(setPhuongSelect(''));
    dispatch(setQuanSelect(''));
  }, [isFetch]);

  const fetchData = async () => {
    try {
      if (isFetch == false) {
        const allkhach = await axios.get('http://112.213.89.194:4500/api/getallkhach');
        await dispatch(setKhachThue(allkhach.data.khachthue));
        await dispatch(setKhachMua(allkhach.data.khachmua));
        await dispatch(setKhachChoThue(allkhach.data.khachchothue));
        await dispatch(setKhachBan(allkhach.data.khachban));
        const PQ = await bcrypt.compareSync('1', sessionStorage.getItem('PQ'));
        dispatch(setUser(PQ));
        dispatch(setFetch(true));
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '90vh',
          margin: 'auto',
          alignItems: 'center'
        }}
      >
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div style={{ margin: '30px' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeItem === 0 ? 'active' : ''}`}
                onClick={() => handleItemClick(0)}
                to="/homepage/khachthue"
              >
                Khach Thue
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeItem === 1 ? 'active' : ''}`}
                onClick={() => handleItemClick(1)}
                to="/homepage/khachmua"
              >
                Khach Mua
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeItem === 2 ? 'active' : ''}`}
                onClick={() => handleItemClick(2)}
                to="/homepage/khachchothue"
              >
                Khach Cho Thue
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeItem === 3 ? 'active' : ''}`}
                onClick={() => handleItemClick(3)}
                to="/homepage/khachban"
              >
                Khach Ban
              </Link>
            </li>
          </ul>
          {/* hoan thien phan bo loc tai day */}
          <div className="filter-container">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalFilter"
              style={{
                width: '60%',
                backgroundColor: 'transparent',
                marginTop: '20px'
              }}
            >
              Filter
            </button>
            <Filter />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Homepage;
