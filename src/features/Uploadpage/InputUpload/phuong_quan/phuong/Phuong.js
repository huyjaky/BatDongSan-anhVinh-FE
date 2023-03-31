import { useDispatch, useSelector } from 'react-redux';
import './Style.scss';
import { useEffect, useState } from 'react';
import { getPhuong, getPhuongQuan, getPhuongSelect, getQuanSelect, getTenPhuong } from '../../../../../store/Selector';
import { setPhuongSelect, setQuan, setQuanSelect, setTenPhuong, setTenQuan } from '../../../../../store/actions/Log';

const Phuong = () => {
  const phuong = useSelector(getPhuong);
  const tenphuong = useSelector(getTenPhuong);
  const phuongSelect = useSelector(getPhuongSelect);
  const phuongquan = useSelector(getPhuongQuan);
  const quanSelect = useSelector(getQuanSelect);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [phuongSelect])

  const handleOnClick = (item) => {
    dispatch(setTenPhuong(item.phuong.TenPhuong));
    dispatch(setPhuongSelect(item.phuong.MaPhuong));
    dispatch(setQuanSelect(item.quan.MaQuan));
    dispatch(setTenQuan(item.quan.TenQuan));
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
      <ul
        className="dropdown-menu"
        style={{ width: '100%', height: '40vh', overflow: 'scroll', overflowX: 'hidden' }}
      >
        <li>
          <a className="dropdown-item" href="#" onClick={(event) => handleOnClick(
            {phuong: { TenPhuong: 'Phuong', MaPhuong: 'Phuong' },
            quan:{TenQuan: 'Quan', MaQuan: 'Quan'} }
          )}>
            Phuong
          </a>
        </li>
        {((phuongSelect === "Phuong" || phuongSelect === "") && (quanSelect === 'Quan' || quanSelect === '')) ?
          (phuongquan &&
            phuongquan.map((item, index) => {
              return (
                <li key={index}>
                  <a className="dropdown-item" href="#" onClick={(event) => handleOnClick(item)}>
                    {item.phuong.TenPhuong}
                  </a>
                </li>
              );
            }))
          :
          (phuongquan &&
            phuongquan.map((item, index) => {
              if (item.quan.MaQuan === quanSelect) {
                return (
                  <li key={index}>
                    <a className="dropdown-item" href="#" onClick={(event) => handleOnClick(item)}>
                      {item.phuong.TenPhuong}
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

export default Phuong;
