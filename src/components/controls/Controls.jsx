import React, { Component } from "react";

import { ControlContainer, ControlRow, ControlKey } from "./controlsStyles.js";

export class Controls extends Component {
  render() {
    return (
      <ControlContainer>
        <ControlRow>
          <ControlKey></ControlKey>
        </ControlRow>
        <ControlRow>
          <ControlKey></ControlKey>
          <ControlKey></ControlKey>
          <ControlKey></ControlKey>
        </ControlRow>
      </ControlContainer>
    );
  }
}

export default Controls;
