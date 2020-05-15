import produce from 'immer';
import {
  authSuccess,
  updateSuccess,
  imageSuccess
} from '../const';


const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case authSuccess:
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case updateSuccess:
      return produce(state, draft => {
        draft.profile = action.payload.profile;
      })
    case imageSuccess:
      return produce(state, draft => {
        draft.profile.fileCover = action.payload.fileCover;
      })
    default:
      return state;
  }
}
