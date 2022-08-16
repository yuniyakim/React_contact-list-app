import {AuthAction, AuthActionTypes, AuthState} from "../../types/auth";

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  user: {
    email: null,
    password: null
  }
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.LOGOUT: {
      return {...state, loading: true};
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {...state, loading: false, user: action.payload};
    }
    case AuthActionTypes.LOGIN_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    case AuthActionTypes.LOGOUT_SUCCESS: {
      return {...state, loading: false, user: { email: null, password: null }};
    }
    case AuthActionTypes.LOGOUT_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}