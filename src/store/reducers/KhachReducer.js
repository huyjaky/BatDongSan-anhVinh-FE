const initState = {
  khachmua: {
    khachmua: [],
    imgkhachmua: []
  },
  khachban: {
    khachban: [],
    imgkhachban: []
  },
  khachthue: {
    khachthue: [],
    imgkhachthue: []
  },
  khachchothue: {
    khachchothue: [],
    imgkhachchothue: []
  },
  khachdetail: {},
  isFetch: false
};

const KhachReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_FETCH':
      return {
        ...state,
        isFetch: action.payload
      }
    case 'SET_KHACHMUA':
      return {
        ...state,
        khachmua: action.payload
      };
    case 'SET_KHACHBAN':
      return {
        ...state,
        khachban: action.payload
      };
    case 'SET_KHACHTHUE':
      return {
        ...state,
        khachthue: action.payload
      };
    case 'SET_KHACHCHOTHUE':
      return {
        ...state,
        khachchothue: action.payload
      };
    case 'SET_KHACHDETAIL':
      return {
        ...state,
        khachdetail: action.payload
      };
    default:
      return state;
  }
};

export default KhachReducer;
