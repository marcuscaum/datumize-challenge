import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

const UsersPage = ({ users, createUser, deleteUser }) => (
  <React.Fragment>
    <header>
      <h1> Users </h1>
    </header>
    <section>
      <List data={users} renderItem={data => <ListItem key={data.id} data={data.name} />} />
      <button type="button" onClick={() => createUser({ name: 'Test' })}>
        Add User
      </button>
      <button type="button" onClick={() => deleteUser(2)}>
        Delete User
      </button>
    </section>
  </React.Fragment>
);

UsersPage.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  createUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersPage;
