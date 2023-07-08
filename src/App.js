import { styled } from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minlength: 10 })`
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

export default App;
