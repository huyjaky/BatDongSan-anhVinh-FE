import { useEffect, useState } from 'react';
import './Style.scss';


const FilterComponent = () => {
  const [price, setPrice] = useState(500000000);

  const handleOnClick = (event) => {
    setPrice(event.target.value);
  }

  useEffect(()=>{}, [price]);

  return (
    <div className='filterComponent-container'>
      <input type={'range'} value={price} className='filterTaiChinh' min={0} max={500000000} onChange={handleOnClick}/>
      <div>{price}</div>
    </div>
  )
}

export default FilterComponent;