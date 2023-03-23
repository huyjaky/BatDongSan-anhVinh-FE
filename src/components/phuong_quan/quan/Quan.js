import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getQuan } from '../../../store/Selector';
import './Style.scss';

const Quan = () => {
  const quan = useSelector(getQuan);
  const [select, setSelect] = useState('Quan');

  const handleOnClick = (item) => {
    setSelect(item);
  }

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-light dropdown-toggle danhsach_quan-btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {select}
        </button>
        <ul className="dropdown-menu" style={{ width: '100%' }}>
          {quan &&
            quan.map((item, index) => {
              return (
                <li key={index}>
                  <a className="dropdown-item" href="#" onClick={event => handleOnClick(item.TenQuan)}>
                    {item.TenQuan}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Quan;
