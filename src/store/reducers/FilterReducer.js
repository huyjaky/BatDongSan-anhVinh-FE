
const initState = {
  priceRange: 50
};

const FilterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PRICERANGE':
      return {
        ...state,
        priceRange: action.payload
      }
    default:
      return state;
  }
};

export default FilterReducer;

