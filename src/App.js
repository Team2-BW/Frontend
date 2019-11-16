import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Map from "./components/map/Map";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomArray: []
    };
  }

  componentDidMount() {
    axios
      .get("https://team2-bw.herokuapp.com/api/rooms")
      .then(res => {
        this.setState({ roomArray: res.data });
      })
      .then(err => {
        console.log(err);
      });
  }

  render() {
    const { roomArray } = this.state;

    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Map {...props} roomArray={roomArray} />}
        />
      </div>
    );
  }
}

export default App;
