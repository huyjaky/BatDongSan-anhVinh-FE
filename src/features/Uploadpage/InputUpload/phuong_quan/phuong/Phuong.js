import { useSelector } from 'react-redux';
import './Style.scss';
import { useState } from 'react';
import { getPhuong } from '../../../../../store/Selector';

const Phuong = () => {
  const phuong = useSelector(getPhuong);
  const [select, setSelect] = useState('Phuong');

  const handleOnClick = (item) => {
    setSelect(item);
  }


  return (
    <div className="dropdown" style={{ height: '100%' }}>
      <button
        className="btn btn-light dropdown-toggle danhsach_quan-btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {select}
      </button>
      <ul className="dropdown-menu" style={{ width: '100%', height: '40vh', overflow: 'scroll'  }}>
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
