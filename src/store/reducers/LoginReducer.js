const initState = {
  isLogIn: false,
  User: false
};

const LoginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        User: action.payload
      };
    case 'SET_LOGIN':
      return {
        ...state,
        isLogIn: action.payload
      };
    default:
      return state;
  }
};

export default LoginReducer;
