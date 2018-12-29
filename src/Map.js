import React from "react";
import {GoogleApiWrapper} from "google-maps-react";
import "./App.css";
import Sidebar from "./Sidebar";


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
            //contents:[],
            markers:[],
            //query:"",
            //map :"",
            allMarkers:[],
            search: "",
            infowindows:new this.props.google.maps.InfoWindow(),
            filteredPlaces:[],
            markerVisible:[],
            pictures:[],
            error: false,
         };

         //this.filterPlaces = this.filterPlaces.bind(this);
         this.handleClick = this.handleClick.bind(this);
      }
// https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
// https://www.youtube.com/watch?v=RkXotG7YUek

   componentDidMount(){
     let tags = "Warsaw"

     fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+process.env.REACT_APP_API_KEY+"&tags="+tags+"&per_page=7&page=1&format=json&nojsoncallback=1")
     .then(function(response){
     return response.json();
   })
   .then(function(j){

     let picArray = j.photos.photo.map((pic) => {

       var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
       return(
         <div className="image-container"
              key={pic.id}>
              <img className="gallery-image"
                   alt="city"
                   src={srcPath}
                   tabIndex="0"
                   aria-label={tags}>
              </img>
         </div>
       )
     })
     this.setState({pictures: picArray});

   }.bind(this)).catch((error) => {
     this.setState({ error: true})
   })


//     this.props.givePlace(this.state.places);
     this.initMap();
     //this.loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs&callback=initMap");
     let {markers} = this.state;
     this.setState({ markers : markers });


     window.gm_authFailure = () => {
			alert("Ups error.. there is problem with loading map. Please check your API key.")
		}



  };
     //let { markers} = this.state;




     // method which match list with marker.

     handleClick = (event, city) => {

         event.preventDefault();

       this.state.markers.map((marker) => {
        if (marker.title === city) {
           this.props.toggleMenu();
           window.google.maps.event.trigger(marker, "click");
        }
      })
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
            for (var i = 0; i < places.length; i++) {
                  markers[i].setVisible(true);
                  filteredPlaces = places;
              }
            }

        this.setState({infowindows: infowindows})
        return this.setState({filteredPlaces: filteredPlaces, infowindows: infowindows})
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
           zoom: 7,
        });
        //this.setState({map:map});

      let bounds = new window.google.maps.LatLngBounds();
      let {infowindows} = this.state;
    //  let infowindowOpenId = "";

     // https://stackoverflow.com/questions/24884197/declaring-google-map-markers-in-a-loop

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

        markers.push(marker);

        marker.index = i; //add index property

      // infowindow content = name of the city

      //contents[i] = (`<div>${marker.title}</div>`);

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
              //infowindowOpenId = this.state.places[i].id;

      // after clicking on other marker infowindow will close

            } else {
                if (infowindows.marker === markers[i]){
                    infowindows.close();
                }
              }
           });

          bounds.extend(marker.position);
          map.fitBounds(bounds);
         }

          this.setState({markers: markers});
          this.setState({infowindows: infowindows})

          //this.setState({ map: map });
          //this.props.giveMarkersToParent(markers);
       }

// https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/

   loadJS = (src) => {
  		const ref = window.document.getElementsByTagName("script")[0];
  		const script = window.document.createElement("script");
  		script.src = src;
  		script.async = true;
  		script.defer = true;
  		ref.parentNode.insertBefore(script, ref);
  		script.onerror = this.setState({ mapError: true });
   };





   render() {


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
