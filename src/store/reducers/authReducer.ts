import {AuthAction, AuthActionTypes, AuthState} from "../../types/auth";

const initialState: AuthState = {
  userId: null,
  token: null,
  loading: false,
  error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.LOGOUT: {
      return {...state, loading: true};
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {...state, loading: false, userId: action.payload.userId, token: action.payload.token, error: null};
    }
    case AuthActionTypes.LOGIN_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    case AuthActionTypes.LOGOUT_SUCCESS: {
      return {...state, loading: false, userId: null, token: null, error: null };
    }
    case AuthActionTypes.LOGOUT_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}