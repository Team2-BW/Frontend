import React from "react";

import { EmptySpace, Row } from "./mapStyles.js";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: []
    };
  }

  componentDidMount() {
    this._createEmptyMatrix();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !prevState.matrix.length &&
      this.state.matrix.length &&
      this.props.roomArray.length
    ) {
      this._insertRooms();
    }
  }

  // Handles creating our empty matrix, this should probably be done after we determine the current size of the map (based on farthest x or y position) to make it more dynamic
  _createEmptyMatrix = () => {
    let matrix = [];

    for (let i = 0; i < 60; i++) {
      matrix.push(new Array(60).fill(0));
    }

    this.setState({ matrix });
  };

  // Handles inserting rooms into our matrix from the room array passed in as props
  _insertRooms = () => {
    const { roomArray } = this.props;

    console.log(roomArray);

    // roomArray.map(room => {
    //   const { coordinates } = room;
    //   const parsedCoords = coordinates.replace(/[()]/g, "").split(",");
    //   console.log(parsedCoords);
    // });
  };

  // Handles looping through our matrix and rendering either an empty room if theres nothing there, a "?" if we don't know whats there, or a room
  _renderMap = () => {
    const { matrix } = this.state;

    return matrix.map((row, i) => {
      return (
        <Row key={`row-${i}`}>
          {row.map((room, j) => {
            if (room === 0) {
              return <EmptySpace key={`empty-space-row-${i}-column-${j}`} />;
            } else {
              return "hi";
            }
          })}
        </Row>
      );
    });
  };

  render() {
    const { matrix } = this.state;
    return <>{matrix.length && this._renderMap()}</>;
  }
}

export default Map;
