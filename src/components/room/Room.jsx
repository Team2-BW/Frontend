import React, { Component } from "react";

import { RoomSpace } from "./roomStyles.js";

export class Room extends Component {
  componentDidMount() {}

  render() {
    const { room } = this.props;

    return (
      <RoomSpace
        roomName={room.name}
        roomDescription={room.description}
        roomCoordinates={room.coordinates}
      />
    );
  }
}

export default Room;
