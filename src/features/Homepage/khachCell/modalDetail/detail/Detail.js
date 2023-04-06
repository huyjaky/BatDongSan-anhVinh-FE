import { useSelector } from 'react-redux';
import AwesomeSlider from 'react-awesome-slider';
import './Style.scss';
import { getKhachDetail } from '../../../../../store/Selector';
import { useEffect } from 'react';

const Detail = () => {
  const khach = useSelector(getKhachDetail);
  return (
    <div className="img-detail">
      <AwesomeSlider animation="cubeAnimation">
        {khach.hinh && khach.hinh.length > 0 ? (
          khach.hinh.map((item, index) => {
            return (
              <div key={index} style={{ borderRadius: '40px' }}>
                <img
                  src={`http://112.213.89.28:4001/api/img/path/${item.Hinh}`}
                  className="img-nha"
                  alt="mota"
                ></img>
              </div>
            );
          })
        ) : (
          <div className="empty-container">Empty</div>
        )}
      </AwesomeSlider>
    </div>
  );
};

export default Detail;
