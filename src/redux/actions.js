import {
  CREATE_PROJECT,
  CREATE_ROLE,
  CREATE_USER,
  DELETE_PROJECT,
  DELETE_ROLE,
  DELETE_USER,
} from './actionTypes';

export const createActions = {
  project: content => ({
    type: CREATE_PROJECT,
    payload: { content },
  }),
  role: content => ({
    type: CREATE_ROLE,
    payload: { content },
  }),
  user: content => ({
    type: CREATE_USER,
    payload: { content },
  }),
};

export const deleteActions = {
  project: id => ({
    type: DELETE_PROJECT,
    payload: { id },
  }),
  role: id => ({
    type: DELETE_ROLE,
    payload: { id },
  }),
  user: id => ({
    type: DELETE_USER,
    payload: { id },
  }),
};
