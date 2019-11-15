import React from 'react';
import { Route } from 'react-router-dom'
import Map from './components/map/Map'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Map}/>
    </div>
  );
}

export default App;
