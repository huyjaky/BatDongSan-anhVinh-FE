import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhuong, setPhuongQuan, setQuan } from '../../../../store/actions/Log';
import { getPhuong, getQuan } from '../../../../store/Selector';
import Phuong from '../../../Uploadpage/InputUpload/phuong_quan/phuong/Phuong';
import Quan from '../../../Uploadpage/InputUpload/phuong_quan/quan/Quan';
import PriceRange from './priceRange/PriceRange';
import Room from './room/Room';
import './Style.scss';

const FilterComponent = () => {
  const phuong = useSelector(getPhuong);
  const quan = useSelector(getQuan);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (phuong.length == 0 || quan.length == 0) {
      let data = await axios.get('http://112.213.89.28:4001/api/phuongquan');
      await dispatch(setPhuong(data.data.phuong));
      await dispatch(setQuan(data.data.quan));
      await dispatch(setPhuongQuan(data.data.phuongquan));
    }
  };

  return (
    <div className="filterComponent-container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Normal Filter
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {/* page1 */}
              <PriceRange />
              <Room />
              <div className="phuong_quan-container">
                <Phuong />
                <Quan />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Advance Filter
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{/* page2 */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
