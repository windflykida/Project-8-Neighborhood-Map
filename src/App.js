import React from "react";
import ReactDOM from "react-dom";
import {GoogleApiWrapper} from "google-maps-react";
import "./App.css";
import Map from "./Map";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import escapeRegExp from "escape-string-regexp";


 class App extends React.Component {

   constructor(props, context){
     super(props, context);

   this.state = {
     // sidebar will show after clicking the hamburger icon
    visible: false,
    allMarkersFromChild: null,
    places:[],
    markers: [],
    query: "",
    filterMarkers: [{
      id: 0,
      map: {},
      position: {},
      animation: null,
      visibile: false,
      title: null,
    }],
   }

   this.handleMouseDown = this.handleMouseDown.bind(this);
   this.toggleMenu = this.toggleMenu.bind(this);
   //this.filterPlaces = this.filterPlaces.bind(this);
    this.handleClick = this.handleClick.bind(this);
   }



 giveMeMarkersMyChild = (markersFromChild) => {
  console.log("markers")
  this.setState({ allMarkersFromChild: markersFromChild});
 }

 givePlace = (mapPlaces) => {
   console.log("places")
   this.setState({places : mapPlaces});
 }

 // function open and close sidebar

 handleMouseDown = (event) => {
   this.toggleMenu();
   console.log("clicked");
   event.stopPropagation();
 }

 // method responsible for toggling whether visible is true or false.

 toggleMenu = () => {
   this.setState({
   visible: !this.state.visible
   });
 }

 // method which match list with marker.

 handleClick = (event, city) => {
     //const { markers } = [];
     event.preventDefault();

   this.state.allMarkersFromChild.map((marker) => {
    if (marker.title === city) {
       this.toggleMenu();
       window.google.maps.event.trigger(marker, "click");
       console.log("Everything is ok with loop")
    } else {
      console.log("something wrong with looping markers")
    }
  })
 }

 updateQuery = (query) => {
   console.log("update")
   this.setState({ query: query.trim() })
 }

 onMarkerUpdate = (markers) => {
   this.setState({ markers :markers})
 }

 filtredPlaces = (query) => {

   let { places, map, markers} = this.state;

   let filtredMarkers;

   this.state.allMarkersFromChild.map((marker) => {
     console.log("mapping")
     return marker;
     console.log("return marker from App")
   })
   if (query){
     this.setState({query : query});
     const match = new RegExp(escapeRegExp(query), "i")

     filtredMarkers = this.state.places.filter((marker) => match.test(marker.title));

     filtredMarkers.map((fM) =>{
       return fM.setMap(null)
     })
     console.log("Jest query")
     return this.setState({filterMarkers: filtredMarkers})

   } else {
     this.setState({query:'', filterMarkers: markers});

     this.state.allMarkersFromChild.map((marker) => {
       console.log("mapping2")
       return marker;

   })
 }
}



  render () {

    let {query} = this.state;
     //let {allMarkersFromChild, query} = this.state;
     let markers = []
     let venues = this.props;
     let showingMarkers;



    return (
      <div>

        <Map
            google ={this.props.google}
            handleClick ={this.handleClick}
            filterPlaces={this.filterPlaces}
            giveMarkersToParent ={this.giveMeMarkersMyChild.bind(this)}
            givePlace = {this.givePlace}
            filterMakers = {this.state.filterMarkers}/>
        <Header
            handleMouseDown={this.handleMouseDown}/>

        <Sidebar
             handleMouseDown={this.handleMouseDown}
             menuVisibility={this.state.visible}
             handleClick ={this.handleClick}
             filtredPlaces={this.filtredPlaces}
             updateQuery={this.updateQuery}
             giveMarkersToParent ={this.giveMeMarkersMyChild}
             allMarkersFromChild={this.state.allMarkersFromChild}
             filterMakers = {this.state.filterMarkers}/>
        <Footer/>

      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(App);
