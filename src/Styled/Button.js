import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  gap: 10px;
  border-radius: 5px;
  background-color: #000000;
  color: white;
  min-width: 220px;
  border: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

export const OutLinedButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
