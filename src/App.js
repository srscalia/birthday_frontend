import React, { Component } from "react";
import Welcome from './Welcome';
import HomeContainer from './HomeContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Welcome/>
        <HomeContainer/>
      </div>
    );
  }
}
export default App;
