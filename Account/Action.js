import { ActionType } from '../Store';
import { identityServerApi } from '../serverApi';

export const signIn = (user) => (dispatch) => {
  return identityServerApi
    .signIn(user)
    .then((response) => {
      return dispatch({ type: ActionType.SIGN_IN, payload: response });
    })
    .catch((error) => {
      dispatch({
        type: ActionType.ERROR,
        payload: error,
      });
      throw error;
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: ActionType.LOGOUT });
};

export const signUp = (user) => (dispatch) => {
  return identityServerApi
    .signUp(user)
    .then((response) => {
      return dispatch({
        type: ActionType.SIGN_UP,
        payload: response,
      });
    })
    .catch((error) => {
      return dispatch({
        type: ActionType.ERROR,
        payload: error,
      });
    });
};

export const forgotPassword = (user) => (dispatch) => {
  return identityServerApi
    .forgotPassword(user)
    .then((response) => {
      return dispatch({ type: ActionType.SIGN_UP, payload: response });
    })
    .catch((error) => {
      return dispatch({ type: ActionType.ERROR, payload: error });
    });
};
