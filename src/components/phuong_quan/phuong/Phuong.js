import { useSelector } from 'react-redux';
import { getPhuong } from '../../../store/Selector';
import './Style.scss';
import { useState } from 'react';

const Phuong = () => {
  const phuong = useSelector(getPhuong);
  const [select, setSelect] = useState('Phuong');

  const handleOnClick = (item) => {
    setSelect(item);
  }


  return (
      <div className="dropdown" style={{height: '100%'}}>
        <button
          className="btn btn-light dropdown-toggle danhsach_phuong-btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {select}
        </button>
        <ul className="dropdown-menu form-select" required style={{ width: '100%', height: '60vh', overflow: 'scroll'}}>
          {phuong &&
            phuong.map((item, index) => {
              return (
                <li key={index}>
                  <a className="dropdown-item" href="#" onClick={event => handleOnClick(item.TenPhuong)}>
                    {item.TenPhuong}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
  );
};

export default Phuong;
