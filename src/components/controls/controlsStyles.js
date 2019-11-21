import styled from "styled-components";

import { secondaryC, tertiaryC } from "../../utils/styleVars.js";

export const ControlContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 8px;
  right: 8px;
`;

export const ControlRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ControlKey = styled.div`
  height: 80px;
  width: 80px;
  margin: 2px;
  background: ${tertiaryC};
`;
