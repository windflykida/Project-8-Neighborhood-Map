import React from "react";
import {GoogleApiWrapper, Marker} from "google-maps-react";




 class Map extends React.Component {

    componentDidMount(){
      this.initMap();

    }

    initMap = () => {
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





      let markers = [];
      let infowindow = new google.maps.InfoWindow();
      let bounds = new window.google.maps.LatLngBounds();


    let  places =
      [
        {name: "Łódź",        location:{lat:51.759445,  lng:19.457216}},
        {name: "Wroclaw",     location:{lat:51.107883,	 lng:17.038538}},
        {name: "Katowice",    location:{lat:50.270908,  lng:19.039993}},
        {name: "Kraków",      location:{lat:50.049683,  lng:19.944544}},
        {name: "Warsaw",      location:{lat:52.237049,  lng:21.017532}},
        {name: "Ostrava",     location:{lat:49.820923,	 lng:18.262524}},
        {name: "Brno",        location:{lat:49.195061,  lng:16.606836}},
        {name: "Poznań",      location:{lat:52.409538,	 lng:16.931992}},
        {name: "Tychy",       location:{lat:50.124981,  lng:19.009438}}
      ];


       for (var i=0; i < places.length; i++){
        let positionOfPlaces = places[i].location;
     let name = places[i].name;
      var marker = new google.maps.Marker({
       map: map,
       position: positionOfPlaces,
       visibile:true,
       title: name,
     });
     markers.push(marker);
   }
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
