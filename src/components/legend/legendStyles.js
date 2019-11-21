import styled from "styled-components";

export const LegendContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 10px;
  left: 10px;
  width: 200px;
  padding: 15px 10px;
  border-radius: 10px;
  background: #16161c;
  box-shadow: 0 0 0 3px #40303e, 0 0 0 6px #16161c,
    0 2px 15px rgba(0, 0, 0, 0.3);
  h1 {
    color: white;
    margin: unset;
    font-size: 25px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 6px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 10px 0 -2px 10px;
  div {
    height: 15px;
    width: 15px;
    margin-right: 8px;
    background: ${props => props.legendColor};
    border-radius: 4px;
  }
`;
