import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange } from '../../../../../store/actions/Log';
import { getPriceRange } from '../../../../../store/Selector';
import './Style.scss';


const PriceRange = () => {
  const price = useSelector(getPriceRange);
  const dispatch = useDispatch();

  const handleOnChange = async(event) => {
    await dispatch(setPriceRange(parseInt(event.target.value)));
  };
  useEffect(() => {}, [price]);

  return (
    <div className='normal-filter'>
      <div className='price-range-container'>
        <input
          type={'range'}
          value={price}
          className="filterTaiChinh"
          min={0}
          max={50}
          onChange={handleOnChange}
          step={2}
        />
        <div>{price}</div>
      </div>
    </div>
  )
}

export default PriceRange;