import React from 'react';
import PropTypes from 'prop-types';
import _compact from 'lodash.compact';

import List from './index.styled';

const ListComponent = ({ data, renderItem, noItemsMessageComponent }) => {
  const items = data && data.map(item => renderItem(item));

  if (_compact(items).length === 0 && noItemsMessageComponent) {
    return <List>{noItemsMessageComponent()}</List>;
  }

  return <List>{_compact(items)}</List>;
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

export default ListComponent;
