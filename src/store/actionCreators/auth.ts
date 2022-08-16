import {AuthAction, AuthActionTypes} from "../../types/auth";
import {Dispatch} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {url} from "./url";

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({type: AuthActionTypes.LOGIN});
      await axios.get(url + '/auth/login', {
        params: {_email: email, _password: password},
      });
      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: {email, password},
      });
    } catch (e) {
      dispatch({
        type: AuthActionTypes.LOGIN_ERROR,
        payload: (e as AxiosError).response?.status === 401 ? 'Wrong email or password' : 'Error occurred while logging in',
      });
    }
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({type: AuthActionTypes.LOGOUT});
      await axios.get(url + '/auth/logout');
      dispatch({
        type: AuthActionTypes.LOGOUT_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: AuthActionTypes.LOGOUT_ERROR,
        payload: 'Error occurred while logging out',
      });
    }
  }
}
