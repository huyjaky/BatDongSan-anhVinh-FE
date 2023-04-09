import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDonVi, setPriceRange } from '../../../../../store/actions/Log';
import { getDonVi, getPriceRange } from '../../../../../store/Selector';
import './Style.scss';

const PriceRange = () => {
  const price = useSelector(getPriceRange);
  const dispatch = useDispatch();
  const Donvi = useSelector(getDonVi);

  const handleOnChange = async (event) => {
    const newValue = parseInt(event.target.value);
    await dispatch(setPriceRange(newValue));

    // Update the position of the price-display element
    const priceDisplayElement = document.getElementById('price-display');
    const percentage = (newValue / 100) * 100;
    priceDisplayElement.style.left = `calc(${percentage}% - 50%)`;
  };
  useEffect(() => { }, [price, Donvi]);

  return (
    <div className="normal-filter">
      <div className="price-display-container">
        <span id="price-display">
          {price} {Donvi}
        </span>
      </div>
      <div className="price-range-container">
        <input
          type={'range'}
          value={price}
          className="filterTaiChinh"
          min={0}
          max={500}
          onChange={handleOnChange}
          step={2}
          style={{ flex: '12', marginRight: '20px' }}
        />

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {Donvi}
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={event => dispatch(setDonVi('Ty'))} >Ty</a></li>
            <li><a className="dropdown-item" onClick={event => dispatch(setDonVi('Trieu'))}>Trieu</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
