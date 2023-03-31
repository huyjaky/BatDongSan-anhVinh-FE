import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhuongSelect, setQuanSelect, setTenPhuong, setTenQuan } from '../../../../../store/actions/Log';
import { getPhuong, getPhuongQuan, getPhuongSelect, getQuan, getQuanSelect, getTenPhuong, getTenQuan } from '../../../../../store/Selector';
import './Style.scss';

const Quan = () => {
  const tenphuong = useSelector(getTenPhuong);
  const phuongSelect = useSelector(getPhuongSelect);
  const phuongquan = useSelector(getPhuongQuan);
  const quanSelect = useSelector(getQuanSelect);
  const tenquan = useSelector(getTenQuan);
  const quan = useSelector(getQuan)
  const dispatch = useDispatch();

  const handleOnClick = async (item) => {
    dispatch(setTenPhuong(item.phuong.TenPhuong));
    dispatch(setPhuongSelect(item.phuong.MaPhuong));
    dispatch(setQuanSelect(item.quan.MaQuan));
    dispatch(setTenQuan(item.quan.TenQuan));
  };

  const handleOnClick2 = async (item) => {
    dispatch(setTenQuan(item.TenQuan));
    dispatch(setQuanSelect(item.MaQuan));
  }

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
      <ul
        className="dropdown-menu"
        style={{ width: '100%' }}
      >
        <li>
          <a className="dropdown-item" href="#" onClick={(event) => handleOnClick(
            {phuong: { TenPhuong: 'Phuong', MaPhuong: 'Phuong' },
            quan:{TenQuan: 'Quan', MaQuan: 'Quan'} }
          )}>
            Quan
          </a>
        </li>
        {(quanSelect === "Phuong" || quanSelect === "") ?
          (quan &&
            quan.map((item, index) => {
              return (
                <li key={index}>
                  <a className="dropdown-item" href="#" onClick={(event) => handleOnClick2(item)}>
                    {item.TenQuan}
                  </a>
                </li>
              );
            }))
          :
          (quan &&
            quan.map((item, index) => {
              if (item.MaQuan === quanSelect) {
                return (
                  <li key={index}>
                    <a className="dropdown-item" href="#" onClick={(event) => handleOnClick2(item)}>
                      {item.TenQuan}
                    </a>
                  </li>
                )
              }
            })
          )
        }
      </ul>
    </div>
  );
};



export default Quan;
