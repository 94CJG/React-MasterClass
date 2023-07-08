import { styled } from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minlength: 10 })`
  //오브젝트를 담을 수 있다.
  //현재 required를 Input에 일괄적으로 넣고 싶을때 사용 할 수있다.
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
