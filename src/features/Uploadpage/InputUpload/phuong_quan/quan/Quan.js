import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuanSelect, setTenQuan } from '../../../../../store/actions/Log';
import { getQuan, getTenQuan } from '../../../../../store/Selector';
import './Style.scss';

const Quan = () => {
  const quan = useSelector(getQuan);
  const tenquan = useSelector(getTenQuan);
  const dispatch = useDispatch();

  const handleOnClick = async (item) => {
    dispatch(setTenQuan(item.TenQuan));
    dispatch(setQuanSelect(item.MaQuan));
  };

  return (
    <div className="dropdown" style={{ height: '100%' }}>
      <button
        className="btn btn-light dropdown-toggle danhsach_quan-btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {tenquan}
      </button>
      <ul className="dropdown-menu" style={{ width: '100%' }}>
        {quan &&
          quan.map((item, index) => {
            return (
              <li key={index}>
                <a className="dropdown-item" href="#" onClick={(event) => handleOnClick(item)}>
                  {item.TenQuan}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Quan;
