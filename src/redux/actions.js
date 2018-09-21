import {
  CREATE_PROJECT, CREATE_ROLE, DELETE_PROJECT, DELETE_ROLE,
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
