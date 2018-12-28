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
    markers: [],
    query: "",
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


  render () {
    let {query} = this.state;
     //let {allMarkersFromChild, query} = this.state;
     let markers = []
     let venues = this.props;
     let showingMarkers;

        if (query) {
          console.log("query")
          const match = new RegExp(escapeRegExp(query), "i")
          showingMarkers = markers.filter((marker) => match.test(marker.title))
        } else {
          showingMarkers = markers;
        }


    return (
      <div>
        <Map
            google ={this.props.google}
            handleClick ={this.handleClick}
            filterPlaces={this.filterPlaces}
            giveMarkersToParent ={this.giveMeMarkersMyChild.bind(this)}/>

        <Header
            handleMouseDown={this.handleMouseDown}/>

        <Sidebar
             handleMouseDown={this.handleMouseDown}
             menuVisibility={this.state.visible}
             handleClick ={this.handleClick}
             filterPlaces={this.filterPlaces}
             updateQuery={this.updateQuery}
             giveMarkersToParent ={this.giveMeMarkersMyChild}
             allMarkersFromChild={this.state.allMarkersFromChild}/>

        <Footer/>

      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(App);
