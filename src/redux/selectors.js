export const getProjects = state => state.projects;

export const getProjectById = (state, id) => {
  const projects = getProjects(state) || {};

  return {
    ...projects.byIds[id],
    id,
  };
};
