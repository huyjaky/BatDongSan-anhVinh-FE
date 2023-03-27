import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getDonVi, getKhachThue, getPriceRange, getSoPhongNgu, getSoPhongVeSinh } from '../../../store/Selector';
import KhachCell from '../khachCell/KhachCell';

const KhachThue = (props) => {
  const DonVi = useSelector(getDonVi);
  const PriceRange = useSelector(getPriceRange);
  const khachthue = useSelector(getKhachThue);
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
      if (DonVi && PriceRange && khachthue) {
        await khachthue.khachthue.filter((item, index) => {
          if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) <= PriceRange) {
            if (SoPhongNgu != 0 || SoPhongVeSinh != 0) {
              if (
                parseInt(item.SoPhongNgu) == SoPhongNgu ||
                parseInt(item.SoPhongVeSinh) == SoPhongVeSinh
              ) {
                arrHinh = [...arrHinh, khachthue.imgKhachThue[index]];
                arrKhach = [...arrKhach, item];
              }
            }
            arrHinh = [...arrHinh, khachthue.imgKhachThue[index]];
            arrKhach = [...arrKhach, item];
          } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange) {
            // filter phong ngu va ve sinh
            if (SoPhongNgu != 0 || SoPhongVeSinh != 0) {
              if (
                parseInt(item.SoPhongNgu) == SoPhongNgu ||
                parseInt(item.SoPhongVeSinh) == SoPhongVeSinh
              ) {
                arrHinh = [...arrHinh, khachthue.imgKhachThue[index]];
                arrKhach = [...arrKhach, item];
              }
            }
            arrHinh = [...arrHinh, khachthue.imgKhachThue[index]];
            arrKhach = [...arrKhach, item];
          }
        });
        setArrKhach(arrKhach);
        setArrHinh(arrHinh);
      }
    };
    fetchData();
  }, [DonVi, PriceRange, khachthue, setArrKhach, setArrHinh]);
  
  if (!DonVi && !PriceRange && !khachthue) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    )
  }

  return <KhachCell arrKhach={arrKhach} arrHinh={arrHinh} DonVi={'Trieu'} />;
};

export default KhachThue;
