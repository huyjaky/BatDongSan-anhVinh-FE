import KhachCell from '../khachCell/KhachCell';
import { useSelector } from 'react-redux';
import {
  getDonVi,
  getKhachBan,
  getKhachChoThue,
  getPriceRange,
  getSoPhongNgu,
  getSoPhongVeSinh
} from '../../../store/Selector';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const KhachChoThue = (props) => {
  const DonVi = useSelector(getDonVi);
  const PriceRange = useSelector(getPriceRange);
  const khachchothue = useSelector(getKhachChoThue);
  const SoPhongNgu = parseInt(useSelector(getSoPhongNgu));
  const SoPhongVeSinh = parseInt(useSelector(getSoPhongVeSinh));
  const [arrKhach, setArrKhach] = useState([]);
  const [arrHinh, setArrHinh] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setArrKhach([]);
      setArrHinh([]);
      let arrKhach = [];
      let arrHinh = [];
      if (DonVi && PriceRange && khachchothue) {
        await khachchothue.khachchothue.filter((item, index) => {
          if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) <= PriceRange) {
            if (SoPhongNgu || SoPhongVeSinh || SoPhongVeSinh != 0 || SoPhongNgu != 0) {
              if (
                parseInt(item.SoPhongNgu) == SoPhongNgu ||
                parseInt(item.SoPhongVeSinh) == SoPhongVeSinh
              ) {
                arrHinh = [...arrHinh, khachchothue.imgKhachChoThue[index]];
                arrKhach = [...arrKhach, item];
              }
            }
            arrHinh = [...arrHinh, khachchothue.imgKhachChoThue[index]];
            arrKhach = [...arrKhach, item];
          } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange) {
            // filter phong ngu va ve sinh
            if (SoPhongNgu || SoPhongVeSinh || SoPhongVeSinh != 0 || SoPhongNgu != 0) {
              if (
                parseInt(item.SoPhongNgu) == SoPhongNgu ||
                parseInt(item.SoPhongVeSinh) == SoPhongVeSinh
              ) {
                arrHinh = [...arrHinh, khachchothue.imgKhachChoThue[index]];
                arrKhach = [...arrKhach, item];
              }
            }
            arrHinh = [...arrHinh, khachchothue.imgKhachChoThue[index]];
            arrKhach = [...arrKhach, item];
          }
        });
        setArrKhach(arrKhach);
        setArrHinh(arrHinh);
      }
    };
    fetchData();
  }, [DonVi, PriceRange, khachchothue, setArrKhach, setArrHinh]);

  if (!DonVi && !PriceRange && !khachchothue) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  return <KhachCell arrKhach={arrKhach} arrHinh={arrHinh} DonVi={'Trieu'} />;
};

export default KhachChoThue;
