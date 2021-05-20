import * as actionTypes from '../actionTypes/actionTypes';

export const setUserConnectionData = (payload) => ({
  type: actionTypes.SET_USER_CONNECTION_DATA,
  payload: payload
});

export const setName = (name) => ({
  type: actionTypes.NAME,
  payload: name
});