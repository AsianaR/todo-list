import styled from "styled-components";
import TodoBox from "./TodoBox";

const AppWraper = styled.div`
    max-width: 40vw;
    min-height: 30vh;
    background: #FAF9F6;
    text-align: center;
    margin: 80px auto;
    opacity: 0.85;
    padding: 60px 30px;
    color: #36454F;
`;

function App() {
  return (
    <AppWraper>
      <TodoBox></TodoBox>
    </AppWraper>
        );
}

export default App;
