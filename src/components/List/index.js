import React from 'react';
import PropTypes from 'prop-types';
import _compact from 'lodash.compact';
import { PoseGroup } from 'react-pose';
import { branch, renderComponent } from 'recompose';

import LoadingSection from '../LoadingSection';
import List from './index.styled';

const ListComponent = ({ data, renderItem, noItemsMessageComponent }) => {
  const items = data && data.map(item => renderItem(item));

  if (_compact(items).length === 0 && noItemsMessageComponent) {
    return <List>{noItemsMessageComponent()}</List>;
  }

  return (
    <List>
      <PoseGroup animateOnMount>{_compact(items)}</PoseGroup>
    </List>
  );
};

ListComponent.propTypes = {
  data: PropTypes.instanceOf(Array),
  renderItem: PropTypes.func.isRequired,
  noItemsMessageComponent: PropTypes.func,
};

ListComponent.defaultProps = {
  data: [],
  noItemsMessageComponent: null,
};

export default branch(({ data }) => !data.length, renderComponent(LoadingSection))(ListComponent);
