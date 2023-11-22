import styled from "styled-components";
import { Button } from "../Styled/Button";
import DiceImg from "../Images/alldices.png";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={DiceImg} alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 90vw;
  height: 90vh;
  display: flex;
  margin: auto;
  align-items: center;
  text-align: end;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
      margin-bottom: 20px;
    }
  }
`;
