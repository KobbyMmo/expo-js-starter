import { SIGN_IN, LOGOUT, SIGN_UP } from '../Store/ActionType';

const initialState = {
  user: {},
  isLoggedIn: false,
  hasValidToken: false,
  token: '',
};

function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        user: {},
        token: '',
        isLoggedIn: false,
        hasValidToken: false,
      };
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        hasValidToken: true,
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        hasValidToken: true,
      };
    default:
      return state;
  }
}

export default AccountReducer;
