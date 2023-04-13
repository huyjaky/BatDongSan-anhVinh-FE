import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import {
  getDonVi,
  getKhachThue,
  getLimitRange,
  getPriceRange,
  getSoPhongNgu,
  getSoPhongVeSinh,
  getTenPhuong,
  getTenQuan,
  getTheLoai
} from '../../../store/Selector';
import KhachCell from '../khachCell/KhachCell';
import { fileFilter } from './filter';

const KhachThue = (props) => {
  const DonVi = useSelector(getDonVi);
  const PriceRange = useSelector(getPriceRange);
  const LimitRange = useSelector(getLimitRange);
  const khachthue = useSelector(getKhachThue);
  const SoPhongNgu = parseInt(useSelector(getSoPhongNgu));
  const SoPhongVeSinh = parseInt(useSelector(getSoPhongVeSinh));
  const tenphuong = useSelector(getTenPhuong);
  const tenquan = useSelector(getTenQuan);
  const TheLoai = useSelector(getTheLoai);
  const [arrKhach, setArrKhach] = useState([]);
  const [arrHinh, setArrHinh] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (DonVi && PriceRange && khachthue) {
        const khach = await fileFilter(
          DonVi,
          PriceRange,
          LimitRange,
          khachthue,
          SoPhongNgu,
          SoPhongVeSinh,
          tenphuong,
          tenquan,
          TheLoai,
          'KhachThue',
          'Trieu'
        );
        setArrKhach(khach.arrKhach);
        setArrHinh(khach.arrHinh);
      }
    };
    fetchData();
  }, [
    DonVi,
    PriceRange,
    LimitRange,
    khachthue,
    setArrHinh,
    setArrKhach,
    SoPhongVeSinh,
    SoPhongNgu,
    TheLoai,
    tenquan,
    tenphuong
  ]);

  if (!DonVi && !PriceRange && !khachthue) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
  return (
    <KhachCell arrHinh={arrHinh} arrKhach={arrKhach} DonVi={'Trieu'} loaikhach={'KhachThue'} />
  );
};

export default KhachThue;
