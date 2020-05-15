import {
  updateRequest,
  updateSuccess,
  updateFailure,
  imageRequest,
  imageSuccess,
  imageFailure,
} from '../const';

export function updateProfileRequest(data) {
  return {
    type: updateRequest,
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: updateSuccess,
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: updateFailure,
  };
}

export function imageCoverRequest(data) {
  return {
    type: imageRequest,
    payload: { data },
  };
}

export function imageCoverSuccess(fileCover) {
  return {
    type: imageSuccess,
    payload: { fileCover },
  };
}

export function imageCoverFailure() {
  return {
    type: imageFailure,
  };
}
