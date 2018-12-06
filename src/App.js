import React from "react";
import {GoogleApiWrapper} from "google-maps-react";
import "./App.css";
import Map from "./Map.js";
//import Marker from "./Marker.js";



export class App extends React.Component {




  // create map


  render() {

    const loadingApp = (props) =>  (
      <div> Map is loading...</div>
    )
    const style = {
      width:"100vw",
      height:"100vw",
    }

    return (
      <div>
      <Map google ={this.props.google}
      style={style}
      map={this.state}
      />
      

      </div>
    )

}
}


export default GoogleApiWrapper({
  apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(App);
