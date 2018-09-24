import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';
import { notify } from 'react-notify-toast';

import List from '../../components/List';
import ListItem from '../../components/ListItem';
import AddItemForm from '../../components/AddItemForm';

const UsersPage = ({ users, createUser, deleteUser }) => (
  <React.Fragment>
    <AddItemForm
      buttonLabel="+ NEW USER"
      action={(values) => {
        const nameTaken = users.data.some(user => values.name === user.name);
        if (nameTaken) {
          return notify.show('Name already taken!', 'error');
        }
        return createUser(values);
      }}
      fields={{
        name: 'User name',
      }}
      schema={{
        name: '',
        members: [],
      }}
    />
    <section>
      {Boolean(users.data.length) && <h2>Drag left to remove the item.</h2>}
      <List
        data={users.data}
        isLoading={users.isLoading}
        renderItem={data => (
          <ListItem
            key={data.id}
            data={data.name}
            dragAnimation
            onValueChange={{
              x: (x) => {
                if (x === -200) {
                  deleteUser(data.id);
                }
              },
            }}
          />
        )}
      />
    </section>
  </React.Fragment>
);

UsersPage.propTypes = {
  users: PropTypes.instanceOf(Object).isRequired,
  createUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default lifecycle({
  componentDidMount() {
    if (!this.props.users.data.length) {
      this.props.fetchUsers();
    }
  },
})(UsersPage);
