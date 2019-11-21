import React, { Component } from "react";

import { LegendContainer, Item } from "./legendStyles.js";

export class Legend extends Component {
  render() {
    return (
      <LegendContainer>
        <h1>Legend</h1>
        <Item legendColor="red">
          <div />
          Shop
        </Item>
        <Item legendColor="purple">
          <div />
          Coin Mine
        </Item>
        <Item legendColor="Blue">
          <div />
          Something Else
        </Item>
      </LegendContainer>
    );
  }
}

export default Legend;
