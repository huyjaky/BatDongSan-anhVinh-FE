const initState = {
  phuong: [],
  quan: [],
  phuongquan: [],
  phuongSelect: 'Phuong',
  quanSelect: 'Quan',
  loaikhach: 'Loai Khach',
};

const InputUploadReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PHUONG':
      return {
        ...state,
        phuong: action.payload
      };
    case 'SET_QUAN':
      return {
        ...state,
        quan: action.payload
      };
    case 'SET_PHUONGQUAN':
      return {
        ...state,
        phuongquan: action.payload
      };
    case 'SET_PHUONGSELECT':
      return {
        ...state,
        phuongSelect: action.payload
      };
    case 'SET_LOAIKHACH':
      return {
        ...state,
        loaikhach: action.payload
      };
    case 'SET_QUANSELECT':
      return {
        ...state,
        quanSelect: action.payload
      }
    default:
      return state;
  }
};

export default InputUploadReducer;
