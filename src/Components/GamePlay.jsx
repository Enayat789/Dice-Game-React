import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutLinedButton } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rolDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number!!");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <ContainerMain>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rolDice={rolDice} />
      <div className="btns">
        <OutLinedButton onClick={resetScore}>Reset Score</OutLinedButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </ContainerMain>
  );
};

export default GamePlay;

const ContainerMain = styled.div`
  /* background-color: #936666; */
  margin-top: 0px;
  .top-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: blue; */
    /* padding: 0px 40px 0px 40px; */
    /* margin-top: 30px; */
  }

  .btns {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    /* max-width: 220px; */
  }
`;
