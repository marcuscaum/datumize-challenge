import React from 'react';
import { compose, lifecycle, withStateHandlers } from 'recompose';

const withAnimation = props => WrappedComponent => compose(
  withStateHandlers(
    () => ({
      animate: false,
    }),
    {
      animationHandler: () => value => ({
        animate: value,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (props && props.onMount) {
        this.props.animationHandler(true);
      }
    },
    componentDidUpdate() {
      if (props && props.onDidUpdate) {
        this.props.animationHandler(true);
      }
    },
  }),
)((wrappedProps, context) => <WrappedComponent {...wrappedProps} {...context} />);

export default withAnimation;
