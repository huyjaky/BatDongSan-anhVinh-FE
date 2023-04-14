import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import {
  getDonVi,
  getKhachBan,
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

const KhachBan = (props) => {
  const DonVi = useSelector(getDonVi);
  const PriceRange = useSelector(getPriceRange);
  const LimitRange = useSelector(getLimitRange);
  const khachban = useSelector(getKhachBan);
  const SoPhongNgu = parseInt(useSelector(getSoPhongNgu));
  const SoPhongVeSinh = parseInt(useSelector(getSoPhongVeSinh));
  const tenphuong = useSelector(getTenPhuong);
  const tenquan = useSelector(getTenQuan);
  const TheLoai = useSelector(getTheLoai);
  const [arrKhach, setArrKhach] = useState([]);
  const [arrHinh, setArrHinh] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (DonVi && PriceRange && khachban) {
        const khach = await fileFilter(
          DonVi,
          LimitRange,
          PriceRange,
          khachban,
          SoPhongNgu,
          SoPhongVeSinh,
          tenphuong,
          tenquan,
          TheLoai,
          'KhachBan',
          'Ty'
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
    khachban,
    setArrHinh,
    setArrKhach,
    SoPhongVeSinh,
    SoPhongNgu,
    TheLoai,
    tenquan,
    tenphuong
  ]);

  if (!DonVi && !PriceRange && !khachban) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
  return <KhachCell arrHinh={arrHinh} arrKhach={arrKhach} DonVi={'Ty'} loaikhach={'KhachBan'} />;
};

export default KhachBan;
