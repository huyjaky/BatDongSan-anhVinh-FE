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
  useEffect(() => {}, [price, Donvi]);

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

        <select
          className="form-select"
          aria-label="Default select example"
          style={{ flex: '1' }}
          onClick={(event) => dispatch(setDonVi(event.target.value))}
          defaultValue="Ty"
        >
          {/* <option selected>Open this select menu</option> */}
          <option value="Trieu">
            Trieu
          </option>
          <option value="Ty">Ty</option>
        </select>
      </div>
    </div>
  );
};

export default PriceRange;
