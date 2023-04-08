export const getIsLogIn = (state) => state.LoginReducer.isLogIn;
export const getUser = (state) => state.LoginReducer.User;

export const getPhuong = (state) => state.InputUploadReducer.phuong;
export const getQuan = (state) => state.InputUploadReducer.quan;
export const getPhuongQuan = (state) => state.InputUploadReducer.phuongquan;

export const getPhuongSelect = (state) => state.InputUploadReducer.phuongSelect;
export const getQuanSelect = (state) => state.InputUploadReducer.quanSelect;
export const getLoaiKhach = (state) => state.InputUploadReducer.loaikhach;

export const getTenPhuong = (state) => state.InputUploadReducer.tenphuong;
export const getTenQuan = (state) => state.InputUploadReducer.tenquan;

export const getKhachMua = (state) => state.KhachReducer.khachmua;
export const getKhachBan = (state) => state.KhachReducer.khachban;
export const getKhachThue = (state) => state.KhachReducer.khachthue;
export const getKhachChoThue = (state) => state.KhachReducer.khachchothue;
export const getKhachDetail = (state) => state.KhachReducer.khachdetail;

export const getFetch = (state) => state.KhachReducer.isFetch;

export const getPriceRange = (state) => state.FilterReducer.priceRange;
export const getDonVi = (state) => state.FilterReducer.DonVi;
export const getTheLoai = (state) => state.FilterReducer.TheLoai;
export const getSoPhongNgu = (state) => state.FilterReducer.SoPhongNgu;
export const getSoPhongVeSinh = (state) => state.FilterReducer.SoPhongVeSinh;


export const getPhuongSelect2 = (state) => state.InputUploadReducer.phuongSelect2;
export const getQuanSelect2 = (state) => state.InputUploadReducer.quanSelect2;
export const getTenPhuong2 = (state) => state.InputUploadReducer.tenphuong2;
export const getTenQuan2 = (state) => state.InputUploadReducer.tenquan2;