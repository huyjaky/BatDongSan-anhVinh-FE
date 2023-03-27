import KhachCell from '../khachCell/KhachCell';
import { useSelector } from 'react-redux';
import {
  getDonVi,
  getKhachMua,
  getPriceRange,
  getSoPhongNgu,
  getSoPhongVeSinh
} from '../../../store/Selector';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const KhachMua = (props) => {
  const DonVi = useSelector(getDonVi);
  const PriceRange = useSelector(getPriceRange);
  const khachmua = useSelector(getKhachMua);
  const SoPhongNgu = useSelector(getSoPhongNgu);
  const SoPhongVeSinh = useSelector(getSoPhongVeSinh);
  const [arrKhach, setArrKhach] = useState([]);
  const [arrHinh, setArrHinh] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setArrKhach([]);
      setArrHinh([]);
      let arrKhach = [];
      let arrHinh = [];
      if (DonVi && PriceRange && khachmua) {
        await khachmua.khachmua.filter((item, index) => {
          if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) * 1000 <= PriceRange) {
            if (SoPhongNgu != 0 || SoPhongVeSinh != 0) {
              if (
                parseInt(item.SoPhongNgu) == SoPhongNgu ||
                parseInt(item.SoPhongVeSinh) == SoPhongVeSinh
              ) {
                arrHinh = [...arrHinh, khachmua.imgKhachMua[index]];
                arrKhach = [...arrKhach, item];
              }
            }
            arrHinh = [...arrHinh, khachmua.imgKhachMua[index]];
            arrKhach = [...arrKhach, item];
          } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange) {
            // filter phong ngu va ve sinh
            if (SoPhongNgu != 0 || SoPhongVeSinh != 0) {
              if (
                parseInt(item.SoPhongNgu) == SoPhongNgu ||
                parseInt(item.SoPhongVeSinh) == SoPhongVeSinh
              ) {
                arrHinh = [...arrHinh, khachmua.imgKhachMua[index]];
                arrKhach = [...arrKhach, item];
              }
            }
            arrHinh = [...arrHinh, khachmua.imgKhachMua[index]];
            arrKhach = [...arrKhach, item];
          }
        });
        setArrKhach(arrKhach);
        setArrHinh(arrHinh);
      }
    };
    fetchData();
  }, [DonVi, PriceRange, khachmua, setArrKhach, setArrHinh]);
  if (!DonVi && !PriceRange && !khachmua) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    )
  }
  return <KhachCell arrHinh={arrHinh} arrKhach={arrKhach} DonVi={'Ty'}/>;
};

export default KhachMua;
