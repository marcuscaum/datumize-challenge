import React from 'react';
import { Portal } from 'react-portal';

import Modal from '../styles/Modal.styled';

const withModal = ({ modalContent }) => WrappedComponent => (props, context) => (
  <React.Fragment>
    <Portal>
      <Modal.Container>
        <Modal.Content>{modalContent(props)}</Modal.Content>
      </Modal.Container>
    </Portal>
    <WrappedComponent {...props} {...context} />
  </React.Fragment>
);

export default withModal;
