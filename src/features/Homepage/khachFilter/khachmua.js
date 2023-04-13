import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import {
  getDonVi,
  getKhachMua,
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

const KhachMua = (props) => {
  // console.time('khach');
  const DonVi = useSelector(getDonVi);
  const PriceRange = useSelector(getPriceRange);
  const LimitRange = useSelector(getLimitRange);
  const khachmua = useSelector(getKhachMua);
  const SoPhongNgu = parseInt(useSelector(getSoPhongNgu));
  const SoPhongVeSinh = parseInt(useSelector(getSoPhongVeSinh));
  const tenphuong = useSelector(getTenPhuong);
  const tenquan = useSelector(getTenQuan);
  const TheLoai = useSelector(getTheLoai);
  const [arrKhach, setArrKhach] = useState([]);
  const [arrHinh, setArrHinh] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (DonVi && PriceRange && khachmua) {
        console.log(khachmua);
        const khach = await fileFilter(
          DonVi,
          PriceRange,
          LimitRange,
          khachmua,
          SoPhongNgu,
          SoPhongVeSinh,
          tenphuong,
          tenquan,
          TheLoai,
          'KhachMua',
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
    khachmua,
    setArrHinh,
    setArrKhach,
    SoPhongVeSinh,
    SoPhongNgu,
    TheLoai,
    tenquan,
    tenphuong
  ]);

  if (!DonVi && !PriceRange && !khachmua) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  // console.timeEnd('khach');
  return <KhachCell arrHinh={arrHinh} arrKhach={arrKhach} DonVi={'Ty'} loaikhach={'KhachMua'} />;
};

export default KhachMua;
