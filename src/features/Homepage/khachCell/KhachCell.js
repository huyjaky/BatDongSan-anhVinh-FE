import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import PropTypes from 'prop-types';
import './Style.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetailHouse from './modalDetail/DetailHouse';
import { useDispatch } from 'react-redux';
import { setKhachDetail } from '../../../store/actions/Log';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';

const KhachCell = (props) => {
  var count = 0;
  const { arrKhach, arrHinh, DonVi } = props;
  const [select, setSelect] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async (arrKhach, arrHinh) => {
      console.log(arrHinh);
      if (arrKhach.length > 0 && arrHinh.length > 0) {
        dispatch(
          setKhachDetail({
            donvi: DonVi,
            khach: arrKhach[select],
            hinh: arrHinh[select]
          })
        );
      }
    };
    fetchData(arrKhach, arrHinh);
    console.log(arrKhach);
  }, [select, arrKhach, arrHinh]);

  const handleXacNhan = async () => {
    try {
      toast.loading('Data is loading!');
      const response = await axios.post('http://localhost:4000/api/remove/khach', {
        
      });
      toast.dismiss();
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <>
      <div className="showkhach">
        {arrHinh &&
          arrHinh.length > 0 &&
          arrHinh.map((item, index) => {
            count = index;
            return (
              <div className="khach" key={index}>
                <div className="function-remove">
                  <button
                    className="icon-container "
                    value={count}
                    onClick={(event) => setSelect(event.currentTarget.value)}
                    data-bs-toggle="modal"
                    data-bs-target="#xacnhan"
                  >
                    <FontAwesomeIcon icon={faTrash} style={{ color: '#ff2e2e', scale: '1.2' }} />
                  </button>
                </div>

                <div className="function-custom">
                  <button
                    className="icon-container btn"
                    value={count}
                    onClick={(event) => setSelect(event.currentTarget.value)}
                    type="button"
                  >
                    <FontAwesomeIcon icon={faCashRegister} style={{ scale: '1.2' }} />
                  </button>
                </div>

                {/* tao ra slide anh */}
                <AwesomeSlider animation="cubeAnimation" key={index}>
                  {item && item.length > 0 ? (
                    item.map((item, index) => {
                      return (
                        <div className="container" key={index} style={{ borderRadius: '40px' }}>
                          <img
                            className="img-nha"
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
                                  ', Quan ' +
                                  arrKhach[count].diachi.quan.TenQuan +
                                  ', Phuong ' +
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
                        <Link to="#">
                          <button
                            className="img-text-temp"
                            value={count}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={(event) => setSelect(event.target.value)}
                          >
                            {arrKhach[count].diachi.TenDuong +
                              ', Quan ' +
                              arrKhach[count].diachi.quan.TenQuan +
                              ', Phuong ' +
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

      <div
        className="modal fade"
        id="xacnhan"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Xac Nhan
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ display: 'grid' }}>
              <button type="button" className="btn btn-primary" style={{ marginBottom: '20px' }}
                data-bs-dismiss="modal"
              >
                Xac Nhan
              </button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Huy Bo
              </button>
            </div>
          </div>
        </div>
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
          TenQuan: PropTypes.string
        })
      })
    })
  ).isRequired,
  arrHinh: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        Hinh: PropTypes.string
      })
    )
  ),

  DonVi: PropTypes.string
};
