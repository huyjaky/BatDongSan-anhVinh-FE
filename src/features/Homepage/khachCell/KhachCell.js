import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import PropTypes from 'prop-types';
import './Style.scss';
import { Link } from 'react-router-dom';

const KhachCell = (props) => {
  const { arrHinh } = props

  return (
    <>
      <div className="khach">
        <AwesomeSlider animation="cubeAnimation" >
          {arrHinh && arrHinh.length > 0 ?
            arrHinh.map((item, index) => {
              return (
                <div className='container' key={index} style={{ borderRadius: '40px' }}>
                  <img src={`http://localhost:4000/api/img/path/${item.Hinh}`} alt='mota'></img>
                  <div className='img-text'>
                    <Link to='#' className='link-text'>
                      Chi Tiet
                    </Link>
                  </div>
                </div>

              )
            })
            :
            <div className='text-light tempty-container' style={{ borderRadius: '40px' }}>
                Empty
              <div className='img-text'>
                <Link to='#' className='link-text'>
                  Chi Tiet
                </Link>
              </div>
            </div>
          }
        </AwesomeSlider>
      </div>
    </>
  );
};

export default KhachCell;

KhachCell.propTypes = {
  arrHinh: PropTypes.arrayOf(
    PropTypes.shape({
      Hinh: PropTypes.string
    })
  )
};