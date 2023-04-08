const initState = {
  phuong: [],
  quan: [],
  phuongquan: [],
  phuongSelect: '',
  quanSelect: '',
  loaikhach: 'Loai Khach',
  tenphuong: 'Phuong',
  tenquan: 'Quan',

  phuongSelect2: '',
  quanSelect2: '',
  tenphuong2: 'Phuong',
  tenquan2: 'Quan'
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
      };
    case 'SET_TENQUAN':
      return {
        ...state,
        tenquan: action.payload
      };
    case 'SET_TENPHUONG':
      return {
        ...state,
        tenphuong: action.payload
      };

    case 'SET_PHUONGSELECT2':
      return {
        ...state,
        phuongSelect2: action.payload
      };
    case 'SET_QUANSELECT2':
      return {
        ...state,
        quanSelect2: action.payload
      };
    case 'SET_TENQUAN2':
      return {
        ...state,
        tenquan2: action.payload
      };
    case 'SET_TENPHUONG2':
      return {
        ...state,
        tenphuong2: action.payload
      };
    default:
      return state;
  }
};

export default InputUploadReducer;

