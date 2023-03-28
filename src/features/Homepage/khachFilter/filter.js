export const fileFilter = async (
  DonVi,
  PriceRange,
  khach,
  SoPhongNgu,
  SoPhongVeSinh,
  tenphuong,
  tenquan,
  TheLoai,
  loaikhach
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
    if (loaikhach === 'KhachMua') {
      await khach.khachmua.filter((item, index) => {
        if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) * 1000 <= PriceRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach.imgKhachMua[index]];
        } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach.imgKhachMua[index]];
        }
      });
    } else if (loaikhach === 'KhachBan') {
      await khach.khachban.filter((item, index) => {
        if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) * 1000 <= PriceRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach.imgKhachMua[index]];
        } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach.imgKhachMua[index]];
        }
      });
    } else if (loaikhach === 'KhachThue') {
      await khach.khachthue.filter((item, index) => {
        if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) <= PriceRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach.imgKhachMua[index]];
        } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach.imgKhachMua[index]];
        }
      });
    } else if (loaikhach === 'KhachChoThue') {
      await khach.khachchothue.filter((item, index) => {
        if (DonVi === 'Trieu' && parseFloat(item.TaiChinh) <= PriceRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach.imgKhachMua[index]];
        } else if (DonVi === 'Ty' && parseFloat(item.TaiChinh) <= PriceRange) {
          arrKhach1 = [...arrKhach1, item];
          arrHinh1 = [...arrHinh1, khach.imgKhachMua[index]];
        }
      });
    }

    await arrKhach1.filter((item, index) => {
      if (SoPhongNgu || SoPhongVeSinh) {
        if (
          SoPhongVeSinh == parseInt(item.SoPhongVeSinh) ||
          SoPhongNgu == parseInt(item.SoPhongNgu)
        ) {
          arrKhach2 = [...arrKhach2, item];
          arrHinh2 = [...arrHinh2, khach.imgKhachMua[index]];
        }
      } else if (!SoPhongNgu && !SoPhongVeSinh) {
        arrKhach2 = [...arrKhach2, item];
        arrHinh2 = [...arrHinh2, khach.imgKhachMua[index]];
      }
    });

    await arrKhach2.filter((item, index) => {
      if (TheLoai === 'Tat Ca') {
        arrKhach3 = [...arrKhach3, item];
        arrHinh3 = [...arrHinh3, khach.imgKhachMua[index]];
      } else if (TheLoai === item.TheLoai) {
        arrKhach3 = [...arrKhach3, item];
        arrHinh3 = [...arrHinh3, khach.imgKhachMua[index]];
      }
    });

    await arrKhach3.filter((item, index) => {
      if (tenquan === 'Quan' && tenphuong === 'Phuong') {
        arrKhach4 = [...arrKhach4, item];
        arrHinh4 = [...arrHinh4, khach.imgKhachMua[index]];
      } else if (
        item.diachi.phuong.TenPhuong === tenphuong ||
        item.diachi.quan.TenQuan === tenquan
      ) {
        arrKhach4 = [...arrKhach4, item];
        arrHinh4 = [...arrHinh4, khach.imgKhachMua[index]];
      }
    });
    const khach_rs = {
      arrKhach: arrKhach4,
      arrHinh: arrHinh4
    };
    return khach_rs;
  }
};
