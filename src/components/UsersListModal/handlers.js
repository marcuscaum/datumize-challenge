export default {
  validateTeamMember: ({ projects }) => (id, content) => {
    const projectIndex = projects.data.findIndex(item => item.id === id);
    const project = projects.data[projectIndex];

    const teamMemberWithRoleIndex = project.team.length
      ? project.team.findIndex(item => item.role === content.role)
      : -1;
    const teamMemberIndexByName = project.team.length
      ? project.team.findIndex(item => item.name === content.name)
      : -1;

    // If the user is already assigned to a role,
    // remove him from the previous role and set him on the new role
    if (teamMemberIndexByName >= 0 && teamMemberWithRoleIndex >= 0) {
      project.team[teamMemberWithRoleIndex].name = content.name;
      project.team.splice(teamMemberIndexByName, 1);
      return project;
    }

    // If user is on the team but the role is not taken
    // remove the user from the previous role and add to the new one
    if (teamMemberIndexByName >= 0 && teamMemberWithRoleIndex < 0) {
      project.team.splice(teamMemberIndexByName, 1);
      project.team.push({
        ...content,
      });
      return project;
    }

    // If the role is already taken,
    // just update with the new user
    if (teamMemberWithRoleIndex >= 0) {
      project.team[teamMemberWithRoleIndex].name = content.name;
      return project;
    }

    project.team.push({ ...content });
    return project;
  },
  unassignUser: ({
    project, roleValues, updateProject, closePortal,
  }) => async () => {
    const teamMemberIndex = project.team.findIndex(member => member.role === roleValues.role);
    project.team.splice(teamMemberIndex, 1);
    await updateProject(roleValues.projectId, project);
    return closePortal();
  },
};
