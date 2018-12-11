import React from "react";
import {GoogleApiWrapper} from "google-maps-react";
import "./App.css";
import Map from "./Map.js";
import Markers from "./Markers.js";



 class App extends React.Component {




  render() {
    return (
      <div>
        <Map
            google ={this.props.google}
            map={this.state}
            >
            {/* I will try another approach when marker and infowindow will be children and other components than map*/}
          <Markers
          addMarkers = {this.addMarkers}
        
          />
      </Map>
      </div>
    )

}

}

export default GoogleApiWrapper({
  apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(App);
