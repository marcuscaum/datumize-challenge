import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

import { RolesList, RoleItem, RoleButton } from './index.styled';

const RolesListComponent = ({
  roles, projectTeam, projectId, onClickRoleButton,
}) => (
  <RolesList>
    {roles.map((role) => {
      const member = projectTeam && projectTeam.find(item => item.role === role.name);
      const memberName = member && member.name;

      return (
        <RoleItem key={role.id} hasMember={memberName}>
          <strong>{role.name}</strong>
          <RoleButton
            onClick={() => {
              onClickRoleButton({
                projectId,
                role: role.name,
                user: memberName,
              });
            }}
          >
            {memberName || 'Unassigned'}
          </RoleButton>
        </RoleItem>
      );
    })}
  </RolesList>
);

RolesListComponent.propTypes = {
  roles: PropTypes.instanceOf(Array).isRequired,
  projectTeam: PropTypes.instanceOf(Array).isRequired,
  projectId: PropTypes.number.isRequired,
  onClickRoleButton: PropTypes.func.isRequired,
};

export default withHandlers({
  onClickRoleButton: ({ roleValuesHandler, openPortal }) => ({ projectId, role, user }) => {
    roleValuesHandler({
      projectId,
      role,
      user,
    });
    openPortal();
  },
})(RolesListComponent);
