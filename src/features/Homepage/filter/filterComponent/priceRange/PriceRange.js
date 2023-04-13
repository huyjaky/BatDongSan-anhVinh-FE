import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDonVi, setLimitRange, setPriceRange } from '../../../../../store/actions/Log';
import { getDonVi, getLimitRange, getPriceRange } from '../../../../../store/Selector';
import './Style.scss';

const PriceRange = () => {
  const price = useSelector(getPriceRange);
  const limit = useSelector(getLimitRange);
  const dispatch = useDispatch();
  const Donvi = useSelector(getDonVi);

  const handleOnChangeRange = async (event) => {
    const newValue = parseInt(event.target.value);
    if (price <= limit) {
      await dispatch(setPriceRange(500));
      alert('price > limit');
      return;
    }
    await dispatch(setPriceRange(newValue));

    // Update the position of the price-display element
    const priceDisplayElement = document.getElementById('price-display');
    const percentage = (newValue / 100) * 100;
    priceDisplayElement.style.left = `calc(${percentage}% - 50%)`;
  };

  const handleOnChangeLimit = async (event) => {
    const newValue = parseInt(event.target.value);
    if (price <= limit) {
      await dispatch(setLimitRange(0));

      alert('price > limit');
      return;
    }
    await dispatch(setLimitRange(newValue));

    // Update the position of the price-display element
    const priceDisplayElement = document.getElementById('price-display2');
    const percentage = (newValue / 100) * 100;
    priceDisplayElement.style.left = `calc(${percentage}% - 50%)`;
  };

  useEffect(() => {}, [price, Donvi]);

  return (
    <div className="normal-filter">
      <div className="price-display-container" style={{display: 'flex', flexDirection: 'column'}}>
        <span id="price-display">
          max: {price} {Donvi}
        </span>
        <span id="price-display2">
          min: {limit} {Donvi}
        </span>
      </div>
      <div className="price-range-container">
        <div style={{ width: '100%' }}>
          <input
            type={'range'}
            value={price}
            className="filterTaiChinh"
            min={0}
            max={500}
            onChange={handleOnChangeRange}
            step={2}
            style={{ flex: '12', marginRight: '20px' }}
          />

          <input
            type={'range'}
            value={limit}
            className="filterTaiChinh"
            min={0}
            max={500}
            onChange={handleOnChangeLimit}
            step={2}
            style={{ flex: '12', marginRight: '20px' }}
          />
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {Donvi}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" onClick={(event) => dispatch(setDonVi('Ty'))}>
                Ty
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={(event) => dispatch(setDonVi('Trieu'))}>
                Trieu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
