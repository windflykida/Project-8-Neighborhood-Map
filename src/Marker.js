import React from "react";
import Map from "./Map.js";
import {GoogleApiWrapper} from "google-maps-react";


 class Marker extends React.Component {


    render(){

      let {map, google, position, center} = this.props;
      
        var places = [
          {name: "Czestochowa", lat:49.8155047, lng:16.8750358},
          {name: "Wroclaw",     lat:50.1846369, lng:18.0400269},
          {name: "Katowice",    lat:49.2989843, lng:17.6919219},
          {name: "Kraków",      lat:49.4500147, lng:18.3984645},
          {name: "Warsaw",      lat:50.1711904, lng:16.7119763},
          {name: "Ostrava",     lat:49.6421877, lng:15.4856614},
          {name: "Brno",        lat:49.2715407, lng:13.9216711},
          {name: "Tychy",       lat:49.8604106, lng:16.9513108}
        ];

        addMarker = () => {
          for (var i=0; i <=places.length; i++){
            var positionOfPlaces = places[i];
            var marker = new.google.maps,Marker({
              position: positionOfPlaces,
              map: map,
              title: places[i].name
            }),

          }

        }

      return()

         }
       }

      export default Marker;
