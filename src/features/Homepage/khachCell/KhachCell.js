import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import PropTypes from 'prop-types';
import './Style.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetailHouse from './modalDetail/DetailHouse';
import { useDispatch } from 'react-redux';
import { setKhachDetail } from '../../../store/actions/Log';

const KhachCell = (props) => {
  var count = 0;
  const { arrKhach, arrHinh } = props;
  const [select, setSelect] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async() => {
      await dispatch(setKhachDetail({
        khach: {
          TenKhach: arrKhach[select].TenKhach,
          TaiChinh: arrKhach[select].TaiChinh,
          Sdt: arrKhach[select].Sdt,
          NhuCauChiTiet: arrKhach[select].NhuCauChiTiet,
          NgayDang: arrKhach[select].NgayDang,
          MaKhach: arrKhach[select].MaKhach,
          Linkface: arrKhach[select].Linkface
        },
        hinh: arrHinh[select],
      }))
    }
    fetchData();
  }, [select])


  return (
    <>
      <div className="showkhach">
        {arrHinh &&
          arrHinh.length > 0 &&
          arrHinh.map((item, index) => {
            count = index;
            return (
              <div className="khach" key={index}>
                <AwesomeSlider animation="cubeAnimation" key={index}>
                  {item && item.length > 0 ? (
                    item.map((item, index) => {
                      return (
                        <div className="container" key={index} style={{ borderRadius: '40px' }}>
                          <img
                            src={`http://localhost:4000/api/img/path/${item.Hinh}`}
                            alt="mota"
                          ></img>
                          <div className="img-text">
                            <Link to="#" className="link-text">
                              <button
                                className="img-text_btn"
                                value={count}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={(event) => setSelect(event.target.value)}
                              >
                                {arrKhach[count].diachi.TenDuong +
                                  ', ' +
                                  arrKhach[count].diachi.quan.TenQuan +
                                  ', ' +
                                  arrKhach[count].diachi.phuong.TenPhuong}
                              </button>
                            </Link>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-light empty-container" style={{ borderRadius: '40px' }}>
                      Empty
                      <div className="img-text">
                        <Link to="#" >
                              <button
                                className="img-text-temp"
                                value={count}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={(event) => setSelect(event.target.value)}
                              >
                                {arrKhach[count].diachi.TenDuong +
                                  ', ' +
                                  arrKhach[count].diachi.quan.TenQuan +
                                  ', ' +
                                  arrKhach[count].diachi.phuong.TenPhuong}
                              </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </AwesomeSlider>
              </div>
            );
          })}
        <DetailHouse />
      </div>
    </>
  );
};

export default KhachCell;

KhachCell.propTypes = {
  arrKhach: PropTypes.arrayOf(
    PropTypes.shape({
      MaKhach: PropTypes.string,
      Linkface: PropTypes.string,
      MaAnhKhach: PropTypes.string,
      NgayDang: PropTypes.string,
      NhuCauChiTiet: PropTypes.string,
      Sdt: PropTypes.string,
      TaiChinh: PropTypes.string,
      TenKhach: PropTypes.string,
      diachi: PropTypes.shape({
        MaPhuong: PropTypes.string,
        MaQuan: PropTypes.string,
        TenDuong: PropTypes.string,
        phuong: PropTypes.shape({
          TenPhuong: PropTypes.string
        }),
        quan: PropTypes.shape({
          TenQuan: PropTypes.shape({
            TenQuan: PropTypes.string
          })
        })
      })
    })
  ).isRequired,
  arrHinh: PropTypes.arrayOf(
    PropTypes.shape({
      Hinh: PropTypes.string
    })
  ).isRequired
};
