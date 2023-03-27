import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import {
  getDonVi,
  getKhachBan,
  getPriceRange,
  getSoPhongNgu,
  getSoPhongVeSinh
} from '../../../store/Selector';
import KhachCell from '../khachCell/KhachCell';

const KhachBan = () => {
  const DonVi = useSelector(getDonVi);
  const PriceRange = useSelector(getPriceRange);
  const khachban = useSelector(getKhachBan);
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
      if (DonVi && PriceRange && khachban) {
        await khachban.khachban.filter((item, index) => {
          if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) * 1000 <= PriceRange) {
            if (SoPhongNgu || SoPhongVeSinh || SoPhongVeSinh != 0 || SoPhongNgu != 0) {
              if (
                parseInt(item.SoPhongNgu) == SoPhongNgu ||
                parseInt(item.SoPhongVeSinh) == SoPhongVeSinh
              ) {
                arrHinh = [...arrHinh, khachban.imgKhachBan[index]];
                arrKhach = [...arrKhach, item];
              }
            }
            arrHinh = [...arrHinh, khachban.imgKhachBan[index]];
            arrKhach = [...arrKhach, item];
          } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange) {
            // filter phong ngu va ve sinh
            if (SoPhongNgu || SoPhongVeSinh || SoPhongVeSinh != 0 || SoPhongNgu != 0) {
              if (
                parseInt(item.SoPhongNgu) == SoPhongNgu ||
                parseInt(item.SoPhongVeSinh) == SoPhongVeSinh
              ) {
                arrHinh = [...arrHinh, khachban.imgKhachBan[index]];
                arrKhach = [...arrKhach, item];
              }
            }
            arrHinh = [...arrHinh, khachban.imgKhachBan[index]];
            arrKhach = [...arrKhach, item];
          }
        });

        setArrKhach(arrKhach);
        setArrHinh(arrHinh);
      }
    };
    fetchData();
  }, [DonVi, PriceRange, khachban, setArrKhach, setArrHinh]);

  if (!DonVi && !PriceRange && !khachban) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  return <KhachCell arrHinh={arrHinh} arrKhach={arrKhach} DonVi={'Ty'} />;
};

export default KhachBan;
