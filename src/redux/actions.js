import {
  CREATE_PROJECT,
  CREATE_ROLE,
  CREATE_USER,
  DELETE_PROJECT,
  DELETE_ROLE,
  DELETE_USER,
} from './actionTypes';

export const createProject = content => ({
  type: CREATE_PROJECT,
  payload: { content },
});

export const deleteProject = id => ({
  type: DELETE_PROJECT,
  payload: { id },
});

export const createRole = content => ({
  type: CREATE_ROLE,
  payload: { content },
});

export const deleteRole = id => ({
  type: DELETE_ROLE,
  payload: { id },
});

export const createUser = content => ({
  type: CREATE_USER,
  payload: { content },
});

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: { id },
});
