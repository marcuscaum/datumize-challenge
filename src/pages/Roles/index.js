import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';

import List from '../../components/List';
import ListItem from '../../components/ListItem';
import AddItemForm from '../../components/AddItemForm';

const RolesPage = ({ roles, createRole, deleteRole }) => (
  <React.Fragment>
    <AddItemForm
      buttonLabel="+ NEW ROLE"
      action={createRole}
      fields={{
        name: 'Role name',
      }}
      schema={{
        name: '',
        members: [],
      }}
    />
    <section>
      <List data={roles.data} renderItem={data => <ListItem key={data.id} data={data.name} />} />
      <button type="button" onClick={() => createRole({ name: 'Test' })}>
        Add Role
      </button>
      <button type="button" onClick={() => deleteRole(2)}>
        Delete Role
      </button>
    </section>
  </React.Fragment>
);

RolesPage.propTypes = {
  roles: PropTypes.instanceOf(Array).isRequired,
  createRole: PropTypes.func.isRequired,
  deleteRole: PropTypes.func.isRequired,
};

export default lifecycle({
  componentDidMount() {
    this.props.fetchRoles();
  },
})(RolesPage);
