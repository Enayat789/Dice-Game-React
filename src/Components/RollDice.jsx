import styled from "styled-components";
import DiceImage1 from "../Images/dice_1.png";
import DiceImage2 from "../Images/dice_2.png";
import DiceImage3 from "../Images/dice_3.png";
import DiceImage4 from "../Images/dice_4.png";
import DiceImage5 from "../Images/dice_5.png";
import DiceImage6 from "../Images/dice_6.png";

const RollDice = ({ currentDice, rolDice }) => {
  const diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,
  ];

  return (
    <DiceContainer>
      <div className="dice" onClick={rolDice}>
        <img src={diceImages[currentDice - 1]} alt={"dice-${currentDice}"} />
        {/* <img src={`../Images/dice_${currentDice}.png`} alt="dice-1" /> */}
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 23px;
    margin: 0px;
  }
`;
