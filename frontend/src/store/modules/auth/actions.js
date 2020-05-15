import {
  authRequest,
  authSuccess,
  authFailure,
  registerRequest,
  appSignOut,
} from '../const';

export function signInRequest(email, password) {
  return {
    type: authRequest,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: authSuccess,
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: registerRequest,
    payload: {name, email, password}
  };
}

export function signFailure() {
  return {
    type: authFailure,
  };
}

export function signOut() {
  return {
    type: appSignOut,
  };
}
