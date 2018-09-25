import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';
import { notify } from 'react-notify-toast';

import List from '../../components/List';
import ListItem from '../../components/ListItem';
import AddItemForm from '../../components/AddItemForm';

const RolesPage = ({ roles, createRole, deleteRole }) => (
  <React.Fragment>
    <AddItemForm
      buttonLabel="+ NEW ROLE"
      action={(values) => {
        const nameTaken = roles.data.some(role => values.name === role.name);
        if (nameTaken) {
          return notify.show('Name already taken!', 'error');
        }
        return createRole(values);
      }}
      fields={{
        name: 'Role name',
      }}
      schema={{
        name: '',
      }}
    />
    <section>
      <List
        data={roles.data}
        isLoading={roles.isLoading}
        renderItem={data => (
          <ListItem
            key={data.id}
            data={data.name}
            dragAnimation
            onValueChange={{
              x: (x) => {
                if (x === -200) {
                  deleteRole(data.id);
                }
              },
            }}
          />
        )}
      />
    </section>
  </React.Fragment>
);

RolesPage.propTypes = {
  roles: PropTypes.instanceOf(Object).isRequired,
  createRole: PropTypes.func.isRequired,
  deleteRole: PropTypes.func.isRequired,
};

export default lifecycle({
  componentDidMount() {
    if (!this.props.roles.data.length) {
      this.props.fetchRoles();
    }
  },
})(RolesPage);
