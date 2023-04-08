import { useDispatch, useSelector } from 'react-redux';
import { getPhuongQuan, getPhuongSelect2, getQuan, getQuanSelect2, getTenPhuong2, getTenQuan2 } from '../../../../../../store/Selector';
import { setPhuongSelect2, setQuanSelect2, setTenPhuong2, setTenQuan2 } from '../../../../../../store/actions/Log';
import './Style.scss';

const Quan2 = () => {
  const quanSelect = useSelector(getQuanSelect2);
  const tenquan = useSelector(getTenQuan2);
  const quan = useSelector(getQuan);
  const dispatch = useDispatch();

  const handleOnClick = async (item) => {
    dispatch(setTenPhuong2(item.phuong.TenPhuong));
    dispatch(setPhuongSelect2(item.phuong.MaPhuong));
    dispatch(setQuanSelect2(item.quan.MaQuan));
    dispatch(setTenQuan2(item.quan.TenQuan));
  };

  const handleOnClick2 = async (item) => {
    dispatch(setTenQuan2(item.TenQuan));
    dispatch(setQuanSelect2(item.MaQuan));
  };

  return (
    <div className="dropdown" style={{ height: '100%' }}>
      <button
        className="btn btn-light dropdown-toggle danhsach_quan-btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {tenquan}
      </button>
      <ul className="dropdown-menu" style={{ width: '100%' }}>
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
            Quan
          </a>
        </li>
        {quanSelect === 'Quan' || quanSelect === ''
          ? quan &&
            quan.map((item, index) => {
              return (
                <li key={index}>
                  <a className="dropdown-item" href="#" onClick={(event) => handleOnClick2(item)}>
                    {item.TenQuan}
                  </a>
                </li>
              );
            })
          : quan &&
            quan.map((item, index) => {
              if (item.MaQuan === quanSelect) {
                return (
                  <li key={index}>
                    <a className="dropdown-item" href="#" onClick={(event) => handleOnClick2(item)}>
                      {item.TenQuan}
                    </a>
                  </li>
                );
              }
            })}
      </ul>
    </div>
  );
};

export default Quan2;
