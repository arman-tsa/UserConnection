
import * as ActionTypes from '../actionTypes/actionTypes';

const initialState = {
  userConnection: [],
  name: undefined
};

const user = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {

    case ActionTypes.SET_USER_CONNECTION_DATA: {
      return {
        ...state,
        userConnection: payload,
      };
    }

    case ActionTypes.NAME: {
      return {
        ...state,
        name: payload,
      };
    }

    default:
      return state;
  }
};

export default user;