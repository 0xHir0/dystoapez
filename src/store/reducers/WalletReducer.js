import * as ACTION_TYPES from '../actions/action_types';

export const initialState = {
  connect: false,
  address: '',
};

export const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CONNECT:
      return {
        ...state,
        connect: true,
        address: action.address,
      };
    case ACTION_TYPES.DISCONNECT:
      return {
        ...state,
        connect: false,
        address: '',
      };
    default:
      return state;
  }
};
