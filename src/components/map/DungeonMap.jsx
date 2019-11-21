import React from "react";
import axios from "axios";

import { EmptySpace, Row } from "./mapStyles.js";
import Room from "../room/Room.jsx";
import Legend from "../legend/Legend.jsx";
import Controls from "../controls/Controls.jsx";

class DungeonMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [],
      roomArray: this.props.roomArray,
      currentRoom: "(60,61)"
    };

    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    axios
      .get("https://team2-bw.herokuapp.com/api/rooms")
      .then(res => {
        this.setState({ roomArray: res.data });
        this._insertRooms();
      })
      .then(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !prevState.matrix.length &&
      this.state.matrix.length &&
      this.state.roomArray.length
    ) {
      this._insertRooms();
    }

    this._scrollToRoom(this.state.currentRoom);
  }

  // Handles getting farthest point
  _getFarthestPoint = () => {
    const { roomArray } = this.state;

    let farthestPoint = 0;

    roomArray.forEach(room => {
      const { coordinates } = room;
      const parsedCoords = coordinates.replace(/[()]/g, "").split(",");
      const larger =
        parsedCoords[0] > parsedCoords[1] ? parsedCoords[0] : parsedCoords[1];

      farthestPoint = farthestPoint > larger ? farthestPoint : larger;
    });

    return parseInt(farthestPoint);
  };

  // Handles creating our empty matrix, this should probably be done after we determine the current size of the map (based on farthest x or y position) to make it more dynamic
  _createEmptyMatrix = () => {
    let matrix = [];
    const farthestPoint = this._getFarthestPoint();

    for (let i = 0; i < 100; i++) {
      matrix.push(new Array(100).fill(0));
    }

    this.setState({ matrix });
    return matrix;
  };

  // Handles inserting rooms into our matrix from the room array passed in as props
  _insertRooms = () => {
    const { roomArray } = this.state;

    let matrix = this._createEmptyMatrix();

    roomArray.forEach(room => {
      const { coordinates } = room;
      const parsedCoords = coordinates.replace(/[()]/g, "").split(",");

      matrix[parsedCoords[1] - 1][parsedCoords[0] - 1] = room;
    });

    this.setState({ matrix });
  };

  // Handles scrolling to current room
  _scrollToRoom = coordinates => {
    if (this[coordinates]) {
      this[coordinates].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }
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
              return (
                <div
                  key={`room-row-${i}-column-${j}`}
                  ref={ref => (this[room.coordinates] = ref)}
                >
                  <Room room={room} />
                </div>
              );
            }
          })}
        </Row>
      );
    });
  };

  render() {
    const { matrix } = this.state;

    return (
      <div ref={ref => (this.mapContainer = ref)}>
        {matrix.length && this._renderMap()}
        <Legend />
        <Controls />
      </div>
    );
  }
}

export default DungeonMap;
