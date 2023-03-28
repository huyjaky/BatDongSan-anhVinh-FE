const initState = {
  priceRange: 500,
  DonVi: 'Ty',
  TheLoai: 'Tat Ca',
  SoPhongNgu: '',
  SoPhongVeSinh: ''
};

const FilterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PRICERANGE':
      return {
        ...state,
        priceRange: action.payload
      };
    case 'SET_DONVI':
      return {
        ...state,
        DonVi: action.payload
      };
    case 'SET_THELOAI':
      return {
        ...state,
        TheLoai: action.payload
      };
    case 'SET_SOPHONGNGU':
      return {
        ...state,
        SoPhongNgu: action.payload
      };
    case 'SET_SOPHONGVESINH':
      return {
        ...state,
        SoPhongVeSinh: action.payload
      };
    default:
      return state;
  }
};

export default FilterReducer;
