export const fileFilter = async (
  DonVi,
  PriceRange,
  LimitRange,
  khach,
  SoPhongNgu,
  SoPhongVeSinh,
  tenphuong,
  tenquan,
  TheLoai,
  loaikhach,
  DonViKhach
) => {
  let arrKhach1 = [];
  let arrHinh1 = [];

  let arrKhach2 = [];
  let arrHinh2 = [];

  let arrKhach3 = [];
  let arrHinh3 = [];

  let arrKhach4 = [];
  let arrHinh4 = [];
  if (DonVi && PriceRange && khach) {
    let khach_in = {
      khach: [],
      img: []
    };
    if (loaikhach === 'KhachMua') {
      khach_in = {
        ...khach_in,
        khach: khach.khachmua,
        img: khach.imgKhachMua
      };
    } else if (loaikhach === 'KhachBan') {
      khach_in = {
        ...khach_in,
        khach: khach.khachban,
        img: khach.imgKhachBan
      };
    } else if (loaikhach === 'KhachThue') {
      khach_in = {
        ...khach_in,
        khach: khach.khachthue,
        img: khach.imgKhachThue
      };
    } else if (loaikhach === 'KhachChoThue') {
      khach_in = {
        ...khach_in,
        khach: khach.khachchothue,
        img: khach.imgKhachChoThue
      };
    }
    console.log(LimitRange);

    await khach_in.khach.filter((item, index) => {
      if (DonViKhach === 'Trieu') {
        if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) <= PriceRange && parseFloat(item.TaiChinh) >= LimitRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach_in.img[index]];
        } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange * 1000 && parseFloat(item.TaiChinh) >= LimitRange * 1000) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach_in.img[index]];
        }
      } else if (DonViKhach === 'Ty') {
        if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) * 1000 <= PriceRange && parseFloat(item.TaiChinh) >= LimitRange * 1000) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach_in.img[index]];
        } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange && parseFloat(item.TaiChinh) >= LimitRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach_in.img[index]];
        }
      }
    });

    await arrKhach1.filter((item, index) => {
      if (SoPhongNgu || SoPhongVeSinh) {
        if (
          SoPhongVeSinh == parseInt(item.SoPhongVeSinh) ||
          SoPhongNgu == parseInt(item.SoPhongNgu)
        ) {
          arrKhach2 = [...arrKhach2, item];
          arrHinh2 = [...arrHinh2, khach_in.img[index]];
        }
      } else if (!SoPhongNgu && !SoPhongVeSinh) {
        arrKhach2 = [...arrKhach2, item];
        arrHinh2 = [...arrHinh2, khach_in.img[index]];
      }
    });

    await arrKhach2.filter((item, index) => {
      if (TheLoai === 'Tat Ca') {
        arrKhach3 = [...arrKhach3, item];
        arrHinh3 = [...arrHinh3, khach_in.img[index]];
      } else if (TheLoai === item.TheLoai) {
        arrKhach3 = [...arrKhach3, item];
        arrHinh3 = [...arrHinh3, khach_in.img[index]];
      }
    });

    await arrKhach3.filter((item, index) => {
      if (tenquan === 'Quan' && tenphuong === 'Phuong') {
        arrKhach4 = [...arrKhach4, item];
        arrHinh4 = [...arrHinh4, khach_in.img[index]];
      } else if (
        item.diachi.phuong.TenPhuong === tenphuong &&
        item.diachi.quan.TenQuan === tenquan
      ) {
        arrKhach4 = [...arrKhach4, item];
        arrHinh4 = [...arrHinh4, khach_in.img[index]];
      } else if (
        item.diachi.phuong.TenPhuong === tenphuong ||
        item.diachi.quan.TenQuan === tenquan
      ) {
        arrKhach4 = [...arrKhach4, item];
        arrHinh4 = [...arrHinh4, khach_in.img[index]];
      }
    });
    const khach_rs = {
      arrKhach: arrKhach4,
      arrHinh: arrHinh4
    };
    return khach_rs;
  }
};
