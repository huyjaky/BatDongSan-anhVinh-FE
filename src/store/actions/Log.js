export const setLogIn = (current) => {
  return {
    type: 'SET_LOGIN',
    payload: current
  };
};

export const setPhuong = (current) => {
  return {
    type: 'SET_PHUONG',
    payload: current
  };
};

export const setQuan = (current) => {
  return {
    type: 'SET_QUAN',
    payload: current
  };
};

export const setPhuongQuan = (current) => {
  return {
    type: 'SET_PHUONGQUAN',
    payload: current
  };
};

export const setPhuongSelect = (current) => {
  return {
    type: 'SET_PHUONGSELECT',
    payload: current
  }
}

export const setQuanSelect = (current) => {
  return {
    type: 'SET_QUANSELECT',
    payload: current
  }
}

export const setLoaiKhach = (current) => {
  return {
    type: 'SET_LOAIKHACH',
    payload: current
  }
}