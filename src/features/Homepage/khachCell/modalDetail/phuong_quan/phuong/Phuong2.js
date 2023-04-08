import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPhuongQuan,
  getPhuongSelect2,
  getQuanSelect2,
  getTenPhuong2
} from '../../../../../../store/Selector';
import {
  setPhuongSelect2,
  setQuanSelect2,
  setTenPhuong2,
  setTenQuan2
} from '../../../../../../store/actions/Log.js';
import './Style.scss';

const Phuong2 = () => {
  const tenphuong = useSelector(getTenPhuong2);
  const phuongSelect = useSelector(getPhuongSelect2);
  const phuongquan = useSelector(getPhuongQuan);
  const quanSelect = useSelector(getQuanSelect2);
  const dispatch = useDispatch();

  useEffect(() => {}, [phuongSelect]);

  const handleOnClick = (item) => {
    dispatch(setTenPhuong2(item.phuong.TenPhuong));
    dispatch(setPhuongSelect2(item.phuong.MaPhuong));
    dispatch(setQuanSelect2(item.quan.MaQuan));
    dispatch(setTenQuan2(item.quan.TenQuan));
  };

  return (
    <div className="dropdown" style={{ height: '100%' }}>
      <button
        className="btn btn-light dropdown-toggle danhsach_quan-btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {tenphuong}
      </button>
      <ul
        className="dropdown-menu"
        style={{ width: '100%', height: '40vh', overflow: 'scroll', overflowX: 'hidden' }}>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={(event) =>
              handleOnClick({
                phuong: { TenPhuong: 'Phuong', MaPhuong: 'Phuong' },
                quan: { TenQuan: 'Quan', MaQuan: 'Quan' }
              })
            }>
            Phuong
          </a>
        </li>
        {(phuongSelect === 'Phuong' || phuongSelect === '') &&
        (quanSelect === 'Quan' || quanSelect === '')
          ? phuongquan &&
            phuongquan.map((item, index) => {
              return (
                <li key={index}>
                  <a className="dropdown-item" href="#" onClick={(event) => handleOnClick(item)}>
                    {item.phuong.TenPhuong}
                  </a>
                </li>
              );
            })
          : phuongquan &&
            phuongquan.map((item, index) => {
              if (item.quan.MaQuan === quanSelect) {
                return (
                  <li key={index}>
                    <a className="dropdown-item" href="#" onClick={(event) => handleOnClick(item)}>
                      {item.phuong.TenPhuong}
                    </a>
                  </li>
                );
              }
            })}
      </ul>
    </div>
  );
};

export default Phuong2;
