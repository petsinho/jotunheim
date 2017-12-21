import { combineReducers } from 'redux';
import _ from 'lodash';

export const getAllProjects = (state, action) => {
  const { type, payload } = action;
  console.log('getting all projs red tpy ', type);
  console.log('getting all projs red payload ', payload);
  switch (type) {
    case 'projects':
      return payload || state;
    default:
      return state || [];
  }
};

export const getSelectedProject = (state, id) => {
  if (!state || !state.projects) return null;
  return _.find(state.projects, p => p.id === id);
};

export default combineReducers({ projects: getAllProjects, getSelectedProject });
