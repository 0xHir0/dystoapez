import * as ACTION_TYPES from './action_types';

export const connect = (data) => {
  return {
    type: ACTION_TYPES.CONNECT,
    address: data.address,
  };
};

export const disconnect = (data) => {
  return {
    type: ACTION_TYPES.DISCONNECT,
  };
};
