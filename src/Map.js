import React from "react";
import {GoogleApiWrapper} from "google-maps-react";


 class Map extends React.Component {
    constructor(props){
      super(props)
    }


  componentDidMount(){
    this.initMap();
  }

  initMap = () => {

    if(this.props &&  this.props.google){
      const {google} = this.props;
      const maps = google.maps;


    this.map = new window.google.maps.Map(document.getElementById("map"), {
         center:{
          lat: 50.8941982,
          lng: 15.8427801
         },
         zoom: 7,


      })




     }


  };
  render() {
    return (
      <div className="map" id="map">
        Loading map...
      </div>
    )
  }
}

export default  GoogleApiWrapper({apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(Map) ;
