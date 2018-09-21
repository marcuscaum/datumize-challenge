import React from 'react';
import PropTypes from 'prop-types';

import sadEmote from '../../assets/sad_emote.svg';

import EmptyList from './index.styled';

const EmptyListComponent = ({ message }) => (
  <EmptyList>
    <img src={sadEmote} alt="sad_emote" />
    <span>{message}</span>
  </EmptyList>
);

EmptyListComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default EmptyListComponent;
