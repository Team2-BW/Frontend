import React from "react";
import { Route } from "react-router-dom";

import Map from "./components/map/Map";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomArray: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Route path="/" component={Map} />
      </div>
    );
  }
}

export default App;
