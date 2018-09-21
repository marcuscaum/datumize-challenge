import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

const RolesPage = ({ roles, createRole, deleteRole }) => (
  <React.Fragment>
    <header>
      <h1> Roles </h1>
    </header>
    <section>
      <List data={roles} renderItem={data => <ListItem key={data.id} data={data.name} />} />
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

export default RolesPage;