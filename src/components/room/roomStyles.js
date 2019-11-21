import styled from "styled-components";

import { primaryC, secondaryC, tertiaryC } from "../../utils/styleVars.js";

export const RoomSpace = styled.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  border: 1px solid #40303e;
  background: green;

  cursor: pointer;
  position: relative;
  &::before {
    position: absolute;
    bottom: 37px;
    left: -84px;
    background-color: ${tertiaryC};
    border-radius: 5px;
    color: #fff;
    content: "${props =>
      `${props.roomName} ${props.roomDescription} ${props.roomCoordinates}`}";
    padding: 1rem;
    text-transform: none;
    transition: all 0.5s ease;
    width: 160px;
  }

  &::after {
    position: absolute;
    top: -7px;
    left: 14px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${tertiaryC};
    content: " ";
    font-size: 0;
    line-height: 0;
    margin-left: -5px;
    width: 0;
  }

  &::before,
  &::after {
    color: #efefef;
    font-family: monospace;
    font-size: 16px;
    opacity: 0;
    pointer-events: none;
    text-align: center;
  }

  &:focus::before,
  &:focus::after,
  &:hover::before,
  &:hover::after {
    opacity: 1;
    transition: all 0.75s ease;
  }
`;
