import styled from 'styled-components';
import posed from 'react-pose';

const animatedLi = posed.li({
  enter: { opacity: 1, x: 0 },
  exit: {
    opacity: 0,
    x: ({ selectedItemId, id }) => (id === selectedItemId ? 100 : -100),
  },
});

export default styled(animatedLi)`
  list-style-type: none;
  background-color: white;
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
