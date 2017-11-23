import { combineReducers } from 'redux';

const projects = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'projects':
      return payload || state;
    default:
      return state || [];
  }
};


export default combineReducers({ projects });
