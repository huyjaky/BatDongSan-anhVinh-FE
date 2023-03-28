import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import {
  getDonVi,
  getKhachMua,
  getPriceRange,
  getSoPhongNgu,
  getSoPhongVeSinh,
  getTenPhuong,
  getTenQuan,
  getTheLoai
} from '../../../store/Selector';
import KhachCell from '../khachCell/KhachCell';

const KhachMua = (props) => {
  const DonVi = useSelector(getDonVi);
  const PriceRange = useSelector(getPriceRange);
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
      let arrKhach1 = [];
      let arrHinh1 = [];

      let arrKhach2 = [];
      let arrHinh2 = [];

      let arrKhach3 = [];
      let arrHinh3 = [];

      let arrKhach4 = [];
      let arrHinh4 = [];
      if (DonVi && PriceRange && khachmua) {
        await khachmua.khachmua.filter((item, index) => {
          if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) * 1000 <= PriceRange) {
            arrKhach1 = [...arrKhach1, item];
            arrHinh1 = [...arrHinh1, khachmua.imgKhachMua[index]];
          } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange) {
            arrKhach1 = [...arrKhach1, item];
            arrHinh1 = [...arrHinh1, khachmua.imgKhachMua[index]];
          }
        })


        await arrKhach1.filter((item, index) => {
          if (SoPhongNgu || SoPhongVeSinh) {
            if (SoPhongVeSinh == parseInt(item.SoPhongVeSinh) || SoPhongNgu == parseInt(item.SoPhongNgu)) {
              arrKhach2 = [...arrKhach2, item];
              arrHinh2 = [...arrHinh2, khachmua.imgKhachMua[index]];
            }
          } else if (!SoPhongNgu && !SoPhongVeSinh) {
            arrKhach2 = [...arrKhach2, item];
            arrHinh2 = [...arrHinh2, khachmua.imgKhachMua[index]];
          }
        })

        await arrKhach2.filter((item, index) => {
          if (TheLoai === 'Tat Ca') {
            arrKhach3 = [...arrKhach3, item];
            arrHinh3 = [...arrHinh3, khachmua.imgKhachMua[index]];
          } else if (TheLoai === item.TheLoai){
            arrKhach3 = [...arrKhach3, item];
            arrHinh3 = [...arrHinh3, khachmua.imgKhachMua[index]];
          }
        })

        await arrKhach3.filter((item, index) => {
          if (tenquan === 'Quan' && tenphuong === 'Phuong') {
            arrKhach4 = [...arrKhach4, item];
            arrHinh4 = [...arrHinh4, khachmua.imgKhachMua[index]];
          } else if (item.diachi.phuong.TenPhuong === tenphuong || item.diachi.quan.TenQuan === tenquan) {
            arrKhach4 = [...arrKhach4, item];
            arrHinh4 = [...arrHinh4, khachmua.imgKhachMua[index]];
          }
        })
        setArrKhach(arrKhach4);
        setArrHinh(arrHinh4);
      }
    };
    fetchData();
  }, [DonVi, PriceRange, khachmua, setArrHinh, setArrKhach, SoPhongVeSinh, SoPhongNgu, TheLoai, tenquan, tenphuong]);



  const filter_phong_wc = (item) => {
    if ((SoPhongNgu || SoPhongVeSinh) && (SoPhongNgu != 0 || SoPhongVeSinh != 0)) {
      if (parseInt(item.SoPhongNgu) == SoPhongNgu || parseInt(item.SoPhongVeSinh) == SoPhongVeSinh) {
        return 'Dung';
      } else {
        return 'Sai';
      }
    } else {
      return 'Khong Ton Tai';
    }
  }

  const filter_loai = (item) => {
    if (TheLoai !== 'Tat Ca') {
      if (item.TheLoai === TheLoai) {
        return 'Dung';
      }
      return 'Sai';

    } else if (TheLoai === 'Tat Ca') {
      return 'Khong Ton Tai';
    }
  }

  const filter_phuongquan = (item) => {
    if (tenphuong !== 'Phuong' || tenquan !== 'Quan') {

      // neu phuong va quan cung ton tai
      if (tenphuong !== 'Phuong' && tenquan !== 'Quan') {
        if (item.diachi.phuong.TenPhuong === tenphuong && item.diachi.quan.TenQuan === tenquan) {
          return 'Dung';
        }
      } else {
        if (item.diachi.phuong.TenPhuong === tenphuong) {
          return 'Dung';
        }
        if (item.diachi.quan.TenQuan === tenquan) {
          return 'Dung';
        }
        return 'Sai';
      }
    } else {
      return 'Khong Ton Tai';
    }
  }

  if (!DonVi && !PriceRange && !khachmua) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
  return <KhachCell arrHinh={arrHinh} arrKhach={arrKhach} DonVi={'Ty'} />;
};

export default KhachMua;
