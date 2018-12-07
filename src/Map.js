import React from "react";
import {GoogleApiWrapper, InfoWindow, Marker} from "google-maps-react";



 class Map extends React.Component {

    componentDidMount(){
      this.initMap();
    }


    initMap() {
      var map;
      var markers = [];
      const {google} = this.props;
      const maps = google.maps;
      if(this.props &&  this.props.google){





      this.map = new maps.Map(document.getElementById("map"), {
           center:{
            lat: 50.8941982,
            lng: 15.8427801
           },
           zoom: 7,
        });
      }
        var places = [
           {name: "Czestochowa", location:{lat:49.8155047, lng:16.8750358}},
           {name: "Wroclaw",     location:{lat:50.1846369, lng:18.0400269}},
           {name: "Katowice",    location:{lat:49.2989843, lng:17.6919219}},
           {name: "Kraków",      location:{lat:49.4500147, lng:18.3984645}},
           {name: "Warsaw",      location:{lat:50.1711904, lng:16.7119763}},
           {name: "Ostrava",     location:{lat:49.6421877, lng:15.4856614}},
           {name: "Brno",        location:{lat:49.2715407, lng:13.9216711}},
           {name: "Tychy",       location:{lat:49.8604106, lng:16.9513108}}
         ];
         var infoWindow = new google.maps.InfoWindow();

         for (var i=0; i < places.length; i++){


           let positionOfPlaces = places[i].location;
           let name = places[i].name;

           var marker = new google.maps.Marker({
             map: this.map,
             position: positionOfPlaces,
             title: name,
           });
           marker.addListener("click", function(){
             infoWindow.open(map,marker);
           });
           markers.push(marker);

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
