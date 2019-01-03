import React from "react";
import {GoogleApiWrapper} from "google-maps-react";
import "./App.css";
import Sidebar from "./Sidebar";

// https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
// https://www.youtube.com/watch?v=RkXotG7YUek
// https://stackoverflow.com/questions/24884197/declaring-google-map-markers-in-a-loop
// https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/

class Map extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      // locations for markers
      places:
             [
              {name: "Łódź",        location:{lat:51.759445,  lng:19.457216} ,id:"0"},
              {name: "Wrocław",     location:{lat:51.107883,	lng:17.038538} ,id:"1"},
              {name: "Katowice",    location:{lat:50.270908,  lng:19.039993} ,id:"2"},
              {name: "Kraków",      location:{lat:50.049683,  lng:19.944544} ,id:"3"},
              {name: "Warszawa",    location:{lat:52.237049,  lng:21.017532} ,id:"4"},
              {name: "Ostrava",     location:{lat:49.820923,	lng:18.262524} ,id:"5"},
              {name: "Brno",        location:{lat:49.195061,  lng:16.606836} ,id:"6"},
              {name: "Poznań",      location:{lat:52.409538,	lng:16.931992} ,id:"7"},
              {name: "Tychy",       location:{lat:50.124981,  lng:19.009438} ,id:"8"}
            ],

        markers:[],
        allMarkers:[],
        search: "",
        infowindows:new this.props.google.maps.InfoWindow(),
        filteredPlaces:[],
        markerVisible:[],
        pictures:[""],
        flickrError: false,
        map:{}
      };

         //this.filterPlaces = this.filterPlaces.bind(this);
         this.handleClick = this.handleClick.bind(this);
      }

   componentDidMount(){
     this.getFlickrImg();
     this.initMap();
     //this.loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs&callback=initMap");
     let {markers} = this.state;
     this.setState({ markers : markers });
     //.then(this.getMarkers());

     window.gm_authFailure = () => {
			alert("Ups error.. there is problem with loading map. Please check your API key.")
		}
  };
     //let { markers} = this.state;


     getFlickrImg = () => {

       let tags = "Warszawa";
       fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+process.env.REACT_APP_API_KEY+"&tags="+tags+"&per_page=1&page=1&format=json&nojsoncallback=1")
       .then(function(response){
         return response.json();
       })
       .then(function(j){

       let picArray = j.photos.photo.map((pic) => {

         var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
         return(
           srcPath
         )
       })

       this.setState({pictures: picArray});

       }.bind(this)).catch((error) => {
       this.setState({ flickrError: true});
       alert(" Oops! Something wrong with loading image, please check your connection and reload the page")

     })
     }

     // method which match list with marker.

     handleClick = (event, city) => {

         event.preventDefault();

       this.state.markers.map((marker) => {
        if (marker.title === city) {
           this.props.toggleMenu();
           window.google.maps.event.trigger(marker, "click");
        }
        return(0);
      })
      return(0);
     }

     // method to filter and display places

     filterPlaces = (query) => {
      const {markers, places} = this.state
      let {infowindows} = this.state;
      let filteredPlaces = [];
      filteredPlaces.splice(0,filteredPlaces.length);

       if (query) {
            for (var i = 0; i < places.length; i++) {
              if (places[i].name.toLowerCase().includes(query.toLowerCase())) {
                  markers[i].setVisible(true)
                  filteredPlaces.push(places[i]);
                }
                else {
                  if (infowindows.marker === markers[i]) {
                    infowindows.close()
                  }
                  markers[i].setVisible(false)
                }
              }
            }
          else {
            for (i = 0; i < places.length; i++) {
                  markers[i].setVisible(true);
                  filteredPlaces = places;
              }
            }

        this.setState({infowindows: infowindows})
        return this.setState({filteredPlaces: filteredPlaces})
      }

      // method to load map

    initMap = () => {

      let {map, places, markers} = this.state;
      let {google} = this.props;
      let maps = google.maps;
      let filteredPlaces = [];
      filteredPlaces = places;
      this.setState({filteredPlaces: filteredPlaces})

      map = new maps.Map(document.getElementById("map"), {
          center:{
            lat: 51.107883,
            lng: 17.038538
           },
           zoom: 7
        });
        this.setState({map:map});

      let bounds = new window.google.maps.LatLngBounds();
      let {infowindows} = this.state;
    //  let infowindowOpenId = "";

      for (var i = 0; i < places.length; i++){

        let positionOfPlaces = places[i].location;
        let name = places[i].name;

     // create marker for location and put it into markers array

        let marker = new google.maps.Marker({
           id: places[i].id,
           map: map,
           position: positionOfPlaces,
           animation: google.maps.Animation.DROP,
           visibile:true,
           title: name,
         });

          marker.index = i; //add index property
          markers.push(marker);
          bounds.extend(marker.position);
          map.fitBounds(bounds);
         }
          this.setState({markers: markers});
          this.setState({infowindows: infowindows})

        //  this.setState({ map: map });

          //this.props.giveMarkersToParent(markers);
       }

       getMarkers = () => {
         let {map, pictures, markers, infowindows, flickrError} = this.state;
         let {google} = this.props;

        markers.forEach((marker, i) => {

         google.maps.event.addListener(marker, "click", function() {

         marker.setAnimation(google.maps.Animation.BOUNCE);

         setTimeout(function() {
            marker.setAnimation(null);
            }, 1000);

           if (infowindows.marker === this.marker){
             infowindows.open(map, marker);
             if (!flickrError) {
              infowindows.setContent(`<div>${marker.title}<br><img class="gallery-image" src=${pictures[0]}></img></div>`);
            }
            else {
              infowindows.setContent(`<div>${marker.title}<br><strong>Oops! Something wrong with loading image, please check your connection and reload the page</strong></div>`);
            }


            map.panTo(markers[this.index].getPosition());

       // after clicking on other marker infowindow will close

             } else {
                 if (infowindows.marker === markers[i]){
                     infowindows.close();
                 }
               }
            });
          });

}


   loadJS = (src) => {
  		const ref = window.document.getElementsByTagName("script")[0];
  		const script = window.document.createElement("script");
  		script.src = src;
  		script.async = true;
  		script.defer = true;
  		ref.parentNode.insertBefore(script, ref);
  		script.onerror = this.setState({ mapError: true });
   };

/*   getPictures = () => {
     let pics = this.state.pictures;
     this.setState({pictures: pics});
     console.log("pics")
     alert(pics[0])
   }*/


   render() {

this.getMarkers();

     return (
       <main>
         <div className="map"
              id="map"
              tabIndex="0"
              aria-label="Map of Poland and Czech Republic"
              role="application">

           </div>
          <div>
         <Sidebar
             menuVisibility={this.props.menuVisibility}
             handleClick ={this.handleClick}
             filterPlaces={this.filterPlaces}
             filteredPlaces={this.state.filteredPlaces}
             giveMarkersToParent ={this.giveMeMarkersMyChild}
             allMarkersFromChild={this.state.allMarkersFromChild}
             filterMarkers = {this.state.filterMarkers}
             query={this.state.query}
             markers = {this.state.markres}
             places = {this.state.places}
             pictures={this.state.pictures}/>
         </div>

        </main>
        )
       }
      }


 export default  GoogleApiWrapper({apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(Map) ;
