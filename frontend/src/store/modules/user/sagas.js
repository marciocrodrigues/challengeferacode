import { takeLatest, call, put, all } from 'redux-saga/effects';
import { updateRequest, imageRequest } from '../const';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  updateProfileSuccess,
  updateProfileFailure,
  imageCoverSuccess,
  imageCoverFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    // atribui um novo objeto a um outro
    const profile = Object.assign(
      { name, email },
      // Caso no rest tenha preenchido o oldPassword, vai atribuir o rest inteiro
      // contendo no password e confirmPassword
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch(err) {
    if(err) {
      toast.error('Erro ao atualizar perfil, confira seus dados!');
      yield put(updateProfileFailure());
    }
  }
}

export function* alterImage({ payload }) {
  try {
    const { data } = payload;

    const response = yield call(api.post, 'filescover', data);

    const { fileCover } = response.data;


    yield put(imageCoverSuccess(fileCover));

  } catch(err) {
    if(err) {
      toast.error('Erro ao alterar ou incluir imagem de fundo!');
    }
  }
}

export default all([
  takeLatest(updateRequest, updateProfile),
  takeLatest(imageRequest, alterImage),
]);
