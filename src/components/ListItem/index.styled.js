import styled from 'styled-components';
import posed from 'react-pose';
import { transform, spring } from 'popmotion';

const { interpolate } = transform;

const animatedLi = posed.li({
  init: { x: 100 },
  enter: { opacity: 1, x: 0 },
  draggable: 'x',
  onChange: true,
  dragBounds: {
    left: -200,
    right: 0,
  },
  dragEnd: {
    transition: spring,
  },
  passive: {
    opacity: ['x', interpolate([-100, -50, 100, 200], [0.2, 1, 1, 0])],
    scale: ['x', interpolate([-100, -1, 100, 200], [0.8, 1, 1, 0])],
  },
});

export default styled(animatedLi)`
  list-style-type: none;
  background-color: white;
  cursor: pointer;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.03);
  border: 1px solid #d2d2d2;

  span {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
