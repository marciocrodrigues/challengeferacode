import produce from 'immer';
import {
  authSuccess,
  authFailure,
  authRequest,
  appSignOut
} from '../const';

// state inicial
const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case authRequest :
      return produce(state, draft => {
        draft.loading = true;
      });
    case authSuccess:
      // produce do immer permite criar um espelho do state e alterar
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    case authFailure:
      return produce(state, draft => {
        draft.loading = false;
      });
    case appSignOut: {
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
      })
    }
    default:
      return state;
  }
}
