import React from "react";
import {GoogleApiWrapper} from "google-maps-react";
import "./App.css";
import Map from "./Map.js";



 class App extends React.Component {




  render() {
    return (
      <div>
        <Map
            google ={this.props.google}
            map={this.state}
        />
      </div>
    )

}

}

export default GoogleApiWrapper({
  apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(App);
