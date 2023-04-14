import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getKhachDetail } from '../../../../store/Selector';
import Detail from './detail/Detail';

const DetailHouse = () => {
  const khach = useSelector(getKhachDetail);

  useEffect(() => { }, [khach]);

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-scrollable modal-fullscreen-xxl-down">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {khach && khach.khach ? (
                  khach.khach.diachi.TenDuong +
                  ', Quan ' +
                  khach.khach.diachi.quan.TenQuan +
                  ', Phuong ' +
                  khach.khach.diachi.phuong.TenPhuong
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InfinitySpin width="200" color="#4fa94d" />
                  </div>
                )}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ height: '100vh' }}>
              <Detail />
            </div>

            <div className="modal-footer">
              <div style={{ width: '100%' }}>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne">
                        #Thong Tin
                      </button>
                    </h2>

                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      {khach && khach.khach ? (
                        <>
                          <div className="input-group">
                            <span
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              aria-label="Username">
                              {khach.khach.MaKhach}
                            </span>
                            <span className="input-group-text">@</span>
                            <span
                              type="text"
                              className="form-control"
                              placeholder="Server"
                              aria-label="Server">
                              {moment(khach.khach.NgayDang).format('DD/MM/YY HH:mm')}
                            </span>
                          </div>
                          <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">
                              @Ten Khach
                            </span>
                            <span
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1">
                              {khach.khach.TenKhach}
                            </span>
                            <span className="input-group-text" id="basic-addon1">
                              @Sdt
                            </span>
                            <span
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1">
                              {khach.khach.Sdt}
                            </span>
                          </div>
                          <div className="input-group">
                            <span className="input-group-text">$</span>
                            <span
                              type="text"
                              className="form-control"
                              aria-label="Amount (to the nearest dollar)">
                              {khach.khach.TaiChinh}
                            </span>
                            <span className="input-group-text">{khach.donvi}</span>
                            <span className="input-group-text" id="basic-addon1">
                              @Linkface
                            </span>
                            <span
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1">
                              {khach.khach.Linkface}
                            </span>
                          </div>

                          <div className="input-group ">
                            <span className="input-group-text">@So Phong Ngu</span>
                            <span
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              aria-label="Username">
                              {khach.khach.SoPhongNgu}
                            </span>
                            <span className="input-group-text">@So Phong Ve Sinh</span>
                            <span
                              type="text"
                              className="form-control"
                              placeholder="Server"
                              aria-label="Server">
                              {khach.khach.SoPhongVeSinh}
                            </span>
                            <span className="input-group-text">@The Loai</span>
                            <span
                              type="text"
                              className="form-control"
                              placeholder="Server"
                              aria-label="Server">
                              {khach.khach.TheLoai}
                              {console.log(khach.khach.TheLoai)}
                            </span>
                          </div>

                          <div className="input-group">
                            <span className="input-group-text">@Nhu Cau Chi Tiet</span>
                            <textarea
                              readOnly
                              className="form-control"
                              style={{
                                height: '100px',
                                overflow: 'auto',
                                border: '1px solid #ccc'

                              }}
                              placeholder={khach.khach.NhuCauChiTiet}
                              >
                            </textarea>
                          </div>
                        </>
                      ) : (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <InfinitySpin width="200" color="#4fa94d" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHouse;
