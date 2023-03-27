import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setLoaiKhach, setRe, setTenPhuong, setTenQuan } from '../../../../store/actions/Log';
import { getLoaiKhach, getPhuongSelect, getQuanSelect } from '../../../../store/Selector';
import Phuong from '../phuong_quan/phuong/Phuong';
import Quan from '../phuong_quan/quan/Quan';
import './Style.scss';

const FormKhach = (props) => {
  const [isFinish, setIsFinish] = useState(false);
  const [TenKhach, setTenKhach] = useState('');
  const [Sdt, setSdt] = useState('');
  const [TenDuong, setTenDuong] = useState('');
  const [Linkface, setLinkface] = useState('');
  const [TaiChinh, setTaiChinh] = useState(0);
  const [NhuCauChiTiet, setNhuCauChiTiet] = useState('');
  const [SoPhongNgu, setSoPhongNgu] = useState('');
  const [SoPhongVeSinh, setSoPhongVeSinh] = useState('');
  const [TheLoai, setTheLoai] = useState('Nguyen Can');

  const phuongSelect = useSelector(getPhuongSelect);
  const quanSelect = useSelector(getQuanSelect);
  const loaikhach = useSelector(getLoaiKhach); //
  const dispatch = useDispatch();

  const { Donvi } = props;
  const handleOnClick = async () => {
    if (loaikhach === 'Loai Khach') {
      toast.warning('Vui Long Chon Loai Khach!');
    } else if (
      !TenKhach ||
      !Sdt ||
      !TenDuong ||
      !TaiChinh ||
      !NhuCauChiTiet ||
      !phuongSelect ||
      !quanSelect ||
      !SoPhongVeSinh ||
      !SoPhongNgu ||
      phuongSelect === 'Phuong' ||
      quanSelect === 'Quan'
    ) {
      toast.warning('Nhap Thieu Thong Tin Cua Khach Vui Long Kiem Tra Lai!');
    } else {
      try {
        toast.loading('Data is loading');
        const response = await axios.post('http://localhost:4000/api/khach', {
          khach: loaikhach,
          TenKhach: TenKhach,
          Sdt: Sdt,
          TenDuong: TenDuong,
          Linkface: Linkface,
          TaiChinh: TaiChinh,
          NhuCauChiTiet: NhuCauChiTiet,
          MaPhuong: phuongSelect,
          MaQuan: quanSelect,
          SoPhongNgu: SoPhongNgu,
          SoPhongVeSinh: SoPhongVeSinh,
          TheLoai: TheLoai
        });
        toast.dismiss();
        if (response.data === 'finish') {
          toast.success('Upload Successful!');
          dispatch(setLoaiKhach('Loai Khach'));
          dispatch(setTenPhuong('Phuong'));
          dispatch(setTenQuan('Quan'));
          setTenKhach('');
          setSdt('');
          setTenDuong('');
          setLinkface('');
          setTaiChinh('');
          setNhuCauChiTiet('');
          dispatch(setRe());
        } else if (response.data === 'error') {
          toast.warn('Error: co loi say ra!');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="form_khach" method="get" action="/upoad/">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ten Khach"
          aria-label="Username"
          value={TenKhach}
          onChange={(event) => setTenKhach(event.target.value)}
        />
        <span className="input-group-text">@</span>
        <input
          type="number"
          className="form-control"
          name="Sdt"
          placeholder="Sdt"
          aria-label="Server"
          required
          value={Sdt}
          onChange={(event) => setSdt(event.target.value)}
        />
      </div>

      <div className="input-group mb-3 diachi">
        <input
          required
          name="TenDuong"
          type="text"
          className="form-control"
          placeholder="Ten Duong"
          aria-label="Username"
          value={TenDuong}
          onChange={(event) => setTenDuong(event.target.value)}
        />
        <div className="danhsach_quanhuyen">
          <Quan />
          <Phuong />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="basic-url" className="form-label text-light">
          Link Face
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            Link:
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            value={Linkface}
            onChange={(event) => setLinkface(event.target.value)}
          />
        </div>
      </div>
      <div className="form-text text-light">Tai Chinh</div>

      <div className="input-group mb-3">
        <span className="input-group-text">VND</span>
        <input
          type="number"
          name="TaiChinh"
          className="form-control"
          required
          aria-label="Amount (to the nearest dollar)"
          value={TaiChinh}
          onChange={(event) => setTaiChinh(event.target.value)}
        />
        <span className="input-group-text">{Donvi}</span>
      </div>

      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          name="SoPhongNgu"
          placeholder="So Phong Ngu"
          aria-label="Username"
          value={SoPhongNgu}
          onChange={(event) => setSoPhongNgu(event.target.value)}
        />
        <span className="input-group-text">@</span>
        <input
          type="number"
          className="form-control"
          name="SoPhongVeSinh"
          placeholder="So Phong Ve Sinh"
          aria-label="Server"
          value={SoPhongVeSinh}
          onChange={(event) => setSoPhongVeSinh(event.target.value)}
        />
      </div>

      <select
        className="form-select"
        aria-label="Default select example"
        style={{ marginBottom: '20px' }}
        onClick={(event) => setTheLoai(event.target.value)}
        defaultValue="Can Ho"
      >
        <option value="Can Ho">Can Ho</option>
        <option value="Nguyen Can">Nguyen Can</option>
      </select>

      <div className="input-group">
        <span className="input-group-text">Nhu Cau Chi Tiet</span>
        <textarea
          className="form-control"
          required
          name="NhuCau"
          aria-label="With textarea"
          value={NhuCauChiTiet}
          onChange={(event) => setNhuCauChiTiet(event.target.value)}
        ></textarea>
      </div>

      <div className="submit_form" style={{ marginTop: '20px' }}>
        <button
          className="btn btn-primary"
          style={{ width: '100%' }}
          type="button"
          onClick={handleOnClick}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormKhach;

FormKhach.propTypes = {
  Donvi: PropTypes.string
};
