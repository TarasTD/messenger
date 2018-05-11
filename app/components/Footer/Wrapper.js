import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 3em 0;
  border-top: 1px solid #666;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-top: 1px solid lightsteelblue;

  section {
    color: lightsteelblue;
    text-transform: lowercase;
    font-weight: 200;
  }
`;

export default Wrapper;
