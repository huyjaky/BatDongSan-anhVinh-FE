import { useSelector } from 'react-redux';
import { getkhachDetail } from '../../../../../store/Selector';
import AwesomeSlider from 'react-awesome-slider';
import './Style.scss';


const Detail = () => {
  const khach = useSelector(getkhachDetail);
  return (
    <div className='img-detail'>
      <AwesomeSlider animation="cubeAnimation" >
        {khach.hinh && khach.hinh.length > 0 ?
          khach.hinh.map((item, index) => {
            return (
              <div key={index} style={{borderRadius: '40px'}}>
                <img
                  src={`http://localhost:4000/api/img/path/${item.Hinh}`}
                  alt="mota"
                ></img>
              </div>
            )
          })
          :
          <div className='empty-container'>
            Empty
          </div>
        }
      </AwesomeSlider>
    </div>
  );
};

export default Detail;
