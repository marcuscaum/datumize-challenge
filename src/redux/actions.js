import { createAsyncAction } from 'redux-promise-middleware-actions';

const apiUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:1234' : 'http://localhost:3039';

export const validateProjectTeam = (id, content) => ({
  type: 'VALIDATE_PROJECT_TEAM',
  payload: { id, content },
});

export const fetchProjects = createAsyncAction('FETCH_PROJECTS', () => fetch(`${apiUrl}/projects`).then(response => response.json()));
export const fetchRoles = createAsyncAction('FETCH_ROLES', () => fetch(`${apiUrl}/roles`).then(response => response.json()));
export const fetchUsers = createAsyncAction('FETCH_USERS', () => fetch(`${apiUrl}/users`).then(response => response.json()));

export const assignUserToProject = createAsyncAction('ASSIGN_USER_TO_PROJECT', async (id, data) => {
  const rawResponse = await fetch(`${apiUrl}/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      team: JSON.stringify(data),
    }),
  });

  const content = await rawResponse.json();

  return { id, content };
});

export const createProject = createAsyncAction('CREATE_PROJECT', async (data) => {
  const rawResponse = await fetch(`${apiUrl}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const content = await rawResponse.json();

  return { content };
});

export const createUser = createAsyncAction('CREATE_USER', async (data) => {
  const rawResponse = await fetch(`${apiUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const content = await rawResponse.json();

  return { content };
});

export const createRole = createAsyncAction('CREATE_ROLE', async (data) => {
  const rawResponse = await fetch(`${apiUrl}/roles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const content = await rawResponse.json();

  return { content };
});

export const deleteProject = createAsyncAction('DELETE_PROJECT', async (id) => {
  await fetch(`${apiUrl}/projects/${id}`, {
    method: 'DELETE',
  });
  return { id };
});

export const deleteUser = createAsyncAction('DELETE_USER', async (id) => {
  await fetch(`${apiUrl}/users/${id}`, {
    method: 'DELETE',
  });
  return { id };
});

export const deleteRole = createAsyncAction('DELETE_ROLE', async (id) => {
  await fetch(`${apiUrl}/roles/${id}`, {
    method: 'DELETE',
  });
  return { id };
});
