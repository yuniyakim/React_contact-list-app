export interface User {
  email: null | string;
  password: null | string;
}

export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: null | string;
  user: User;
}

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT = 'LOGOUT',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_ERROR = 'LOGOUT_ERROR',
}

interface LoginAction {
  type: AuthActionTypes.LOGIN;
}

interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: User;
}

interface LoginErrorAction {
  type: AuthActionTypes.LOGIN_ERROR;
  payload: string;
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

interface LogoutSuccessAction {
  type: AuthActionTypes.LOGOUT_SUCCESS;
}

interface LogoutErrorAction {
  type: AuthActionTypes.LOGOUT_ERROR;
  payload: string;
}

export type AuthAction =
  LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutErrorAction;
