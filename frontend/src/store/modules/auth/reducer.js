import produce from 'immer';
import { authSuccess } from '../const';

// state inicial
const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case authSuccess:
      // produce do immer permite criar um espelho do state e alterar
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}
