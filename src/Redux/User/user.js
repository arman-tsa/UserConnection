
import * as ActionTypes from '../actionTypes/actionTypes';

const initialState = {
  userConnection: [],
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

    default:
      return state;
  }
};

export default user;