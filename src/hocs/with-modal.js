import React from 'react';
import { PortalWithState } from 'react-portal';

import Modal from '../styles/Modal.styled';

const withModal = ({ content, title, description }) => WrappedComponent => (props, context) => (
  <PortalWithState closeOnEsc>
    {portalProps => (
      <React.Fragment>
        {portalProps.portal(
          <Modal.Container>
            <Modal.Content>
              <Modal.Header>
                <Modal.CloseButton onClick={portalProps.closePortal} />
                <h1>{title}</h1>
                <span>{description}</span>
              </Modal.Header>
              {content(props)}
            </Modal.Content>
          </Modal.Container>,
        )}
        <WrappedComponent {...props} {...context} {...portalProps} />
      </React.Fragment>
    )}
  </PortalWithState>
);

export default withModal;
