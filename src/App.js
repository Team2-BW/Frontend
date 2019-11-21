import React from "react";
import { Route } from "react-router-dom";

import DungeonMap from "./components/map/DungeonMap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomArray: []
    };
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={DungeonMap} />
      </div>
    );
  }
}

export default App;
