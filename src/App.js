import styled, { keyframes } from 'styled-components';
 //에니메이션을 사용하기 위한 import 추가

const Wrapper = styled.div`
  display: flex;
`;

const rotatinAnimation = keyframes` //노말 CSS코드를 작성
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

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotatinAnimation} 2s linear infinite;
  //에니메이션을 사용 하는 방법 JavaScript string을 작성
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    // 부모 컴포넌트 안에 있기 때문에 CSS 변경시 이렇게 작성 가능함.
    font-size: 36px;
    &:hover {
      font-size: 40px;
      // span:hover와 같은 의미 이다. &=sapn 이라는 의미.
    }
    &:active {
      opacity: 0;
    }
  }
  //결국 style를 꾸며줄 때 모든 게 다 component일 필요가 없다.
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😍</span> {/**스타일 컴포넌트가 아니다. */}
      </Box>
    </Wrapper>
  );
}
export default App;
