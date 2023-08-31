import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotatinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;   
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotatinAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <div>
      <Wrapper>
        <Box>
          <Title>Hello</Title>
        </Box>
        <Emoji>❤️</Emoji>
      </Wrapper>
    </div>
  );
}
export default App;
//모든 색깔을 하나의 object 안에 넣어놨기 때문에 매우 유용하다.
