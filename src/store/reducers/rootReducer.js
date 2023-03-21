
const initState = {
  isLogIn: false
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        isLogIn: !state.isLogIn
      }
    default:
      return state;
  }
}

export default rootReducer;

