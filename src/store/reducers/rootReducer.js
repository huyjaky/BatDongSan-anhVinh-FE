const initState = {
  isLogIn: false
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        isLogIn: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
