import React from "react";
import {GoogleApiWrapper} from "google-maps-react";
import Markers from "./Markers";



 class Map extends React.Component {

    componentDidMount(){
      this.initMap();
    }

    initMap() {
      var map;
      const {google} = this.props;
      const maps = google.maps;
      if(this.props &&  this.props.google){


      map = new maps.Map(document.getElementById("map"), {
           center:{
            lat: 51.107883,
            lng: 17.038538
           },
           zoom: 7,
        });
      }
    }


    render() {
      return (
        <div className="map" id="map">

        </div>
      )
    }
  }

  export default  GoogleApiWrapper({apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(Map) ;
