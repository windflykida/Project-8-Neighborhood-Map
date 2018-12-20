import React from "react";
import escapeRegExp from 'escape-string-regexp';
import {GoogleApiWrapper} from "google-maps-react";
import Sidebar from "./Sidebar";


class Map extends React.Component {

constructor(props){
  super(props);

    this.state = {
      // locations for markers
      places:
             [
              {name: "Łódź",        location:{lat:51.759445,  lng:19.457216} ,id:"1"},
              {name: "Wrocław",     location:{lat:51.107883,	lng:17.038538} ,id:"2"},
              {name: "Katowice",    location:{lat:50.270908,  lng:19.039993} ,id:"3"},
              {name: "Kraków",      location:{lat:50.049683,  lng:19.944544} ,id:"4"},
              {name: "Warszawa",    location:{lat:52.237049,  lng:21.017532} ,id:"5"},
              {name: "Ostrava",     location:{lat:49.820923,	lng:18.262524} ,id:"6"},
              {name: "Brno",        location:{lat:49.195061,  lng:16.606836} ,id:"7"},
              {name: "Poznań",      location:{lat:52.409538,	lng:16.931992} ,id:"8"},
              {name: "Tychy",       location:{lat:50.124981,  lng:19.009438} ,id:"9"}
            ],
            contents:[],
            markers:[],
            filteredMarkers:[],
            map:"",
            query:"",
            infowindows: new this.props.google.maps.InfoWindow(),
        };

        }


   componentDidMount(){
     this.initMap();

    }


          initMap = () => {

            let {map, markers, contents, places} = this.state;
            const {google} = this.props;
            const maps = google.maps;

            map = new maps.Map(document.getElementById("map"), {
                 center:{
                  lat: 51.107883,
                  lng: 17.038538
                 },
                 zoom: 7,
              });

            let bounds = new window.google.maps.LatLngBounds();
            let infowindows = new google.maps.InfoWindow();

         // https://stackoverflow.com/questions/24884197/declaring-google-map-markers-in-a-loop

            for (var i = 0; i < places.length; i++){

              let positionOfPlaces = places[i].location;
              let name = places[i].name;

          // create marker for location and put it into markers array

              let marker = new google.maps.Marker({
                 map: map,
                 position: positionOfPlaces,
                 animation: google.maps.Animation.DROP,
                 visibile:true,
                 title: name,
               });
                marker.setMap(map);
              markers.push(marker);

              marker.index = i; //add index property

             // infowindow content = name of the city

            contents[i] = (`<div>${marker.title}</div>`);

            // loop to set marker infowindow, animation for markers.

            google.maps.event.addListener(marker, "click", function() {

            // set marker to bounce 2 times after click

              marker.setAnimation(google.maps.Animation.BOUNCE);

              setTimeout(function() {
                 marker.setAnimation(null);
                 }, 1000);

                if (infowindows.marker === this.marker){
                    infowindows.open(map, marker);
                    infowindows.setContent(`<div>${marker.title}</div>`);
                    map.panTo(markers[this.index].getPosition());

            // after clicking on other marker infowindow will close
                  } else {
                      if (this.infowindows.marker === markers[i]){
                          this.infowindows.close();
                      }
                    }
                 });

                bounds.extend(marker.position);
                map.fitBounds(bounds);
               }
             }



           render() {
             const handleClick = this.handleClick;

             return (
               <main>
               <div className="map"
                    id="map">
              </div>

              <Sidebar
              markers={this.markers}
              handleClick={this.handleClick}
              filterMarkers={this.filterMarkers}/>

              </main>

            )
          }
        }


 export default  GoogleApiWrapper({apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(Map) ;
