import { useDispatch, useSelector } from 'react-redux';
import './Style.scss';
import { useState } from 'react';
import { getPhuong, getPhuongSelect, getTenPhuong } from '../../../../../store/Selector';
import { setPhuongSelect, setTenPhuong } from '../../../../../store/actions/Log';

const Phuong = () => {
  const phuong = useSelector(getPhuong);
  const tenphuong = useSelector(getTenPhuong);
  const dispatch = useDispatch();

  const handleOnClick = (item) => {
    dispatch(setTenPhuong(item.TenPhuong));
    dispatch(setPhuongSelect(item.MaPhuong));
  };

  return (
    <div className="dropdown" style={{ height: '100%' }}>
      <button
        className="btn btn-light dropdown-toggle danhsach_quan-btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {tenphuong}
      </button>
      <ul className="dropdown-menu" style={{ width: '100%', height: '40vh', overflow: 'scroll', overflowX: 'hidden' }}>
        {phuong &&
          phuong.map((item, index) => {
            return (
              <li key={index}>
                <a className="dropdown-item" href="#" onClick={(event) => handleOnClick(item)}>
                  {item.TenPhuong}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Phuong;
