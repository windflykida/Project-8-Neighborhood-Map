import React from "react";
import ReactDOM from "react-dom";
import {GoogleApiWrapper} from "google-maps-react";


class Map extends React.Component {

   componentDidMount(){
     this.initMap();
    }


          initMap = () => {
            var map;
            const {google} = this.props;
            const maps = google.maps;


            map = new maps.Map(document.getElementById("map"), {
                 center:{
                  lat: 51.107883,
                  lng: 17.038538
                 },
                 zoom: 7,
              });


            let markers = [];

            let contents = [];
            let bounds = new window.google.maps.LatLngBounds();
            let infowindows = new google.maps.InfoWindow({
                content: contents[i],
                maxWidth: 300
            });


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

              //https://stackoverflow.com/questions/24884197/declaring-google-map-markers-in-a-loop
             for (var i=0; i < places.length; i++){
                let positionOfPlaces = places[i].location;
                let name = places[i].name;
                let marker = new google.maps.Marker({
                   map: map,
                   position: positionOfPlaces,
                   visibile:true,
                   title: name,
                 });
                markers.push(marker);
                 marker.index = i; //add index property
                 
                 // infowindow content = name of the place
                contents[i] = (`<div>${marker.title}</div>`);

                google.maps.event.addListener(marker, 'click', function() {
                  if(infowindows.marker === this.marker){
                    console.log(this.index); // this will give correct index
                    console.log(i); //this will always give 10 for you
                    infowindows.open(map, marker);
                    infowindows.setContent(`<div>${marker.title}</div>`);
                    map.panTo(markers[this.index].getPosition());
                } else {
                  if (this.infowindows.marker === markers[i]){
                    this.infowindows.close();
                }
               }

              })

                bounds.extend(marker.position);
               }
               map.fitBounds(bounds);
             };









           render() {
             return (
               <div className="map"
                    id="map">
              </div>

            )
          }
        }


 export default  GoogleApiWrapper({apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(Map) ;
