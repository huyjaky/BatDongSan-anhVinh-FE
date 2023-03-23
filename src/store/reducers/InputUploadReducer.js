const initState = {
  phuong: [],
  quan: [],
  phuongquan: []
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
    default:
      return state;
  }
};

export default InputUploadReducer;
