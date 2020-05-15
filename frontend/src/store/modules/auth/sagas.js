import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signFailure } from './actions';
import {
  authRequest,
  registerRequest,
  appSignOut
} from '../const';
import history from '../../../services/history';
import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    // yield equivale a await, o * da function funciona como o async
    //call para realizar uma chamada a api
    const response = yield call(api.post, 'session', { email, password });

    const { token, user } = response.data;

    // Após feito login, seta no header o token no authorization
    // assim sendo utilizado nas proximas chamadas
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    //push do history para redirecionar ao dashboard
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');

  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

// dentro do persist tem um payload com as informações que armazenamos ao logar
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  // action do persist
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(authRequest, signIn),
  takeLatest(registerRequest, signUp),
  takeLatest(appSignOut, signOut),
]);
