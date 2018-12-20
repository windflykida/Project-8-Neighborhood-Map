import React from "react";
import ReactDOM from "react-dom";
import {GoogleApiWrapper} from "google-maps-react";
import "./App.css";
import Map from "./Map.js";
import Sidebar from "./Sidebar.js";
import Header from "./Header.js";
import Footer from "./Footer.js";


 class App extends React.Component {

   constructor(props){
     super(props);

       this.state = {
         // sidebar will show after clicking the hamburger icon
        visible: false,
        places: "",



       };

       this.handleMouseDown = this.handleMouseDown.bind(this);
       this.toggleMenu = this.toggleMenu.bind(this);
       this.showInfo = this.showInfo.bind(this);
     }

// function open and close sidebar

         handleMouseDown(event){
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

       showInfo = (venue) => {
         let infowindows = new this.props.google.maps.InfoWindow();
         let map = "";
         let markers = [] ;
         let {google} = this.props;

         let marker = this.markers.filter(m => m.id === venue.id)[0]
           infowindows.setContent(`<div>${marker.title}</div>`);
           map.panTo(markers[this.index].getPosition());
          this.infowindow.open(this.map, marker);
          if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else { marker.setAnimation(this.google.maps.Animation.BOUNCE);
      } setTimeout(() => { marker.setAnimation(null) }, 2000);

  }















  render (

  ) {
    return (
          <div>
            <Map
                google ={this.props.google}
                map={this.state}
                handleClick={this.handleClick}/>

            <Header
                handleMouseDown={this.handleMouseDown}/>

            <Sidebar
                 handleMouseDown={this.handleMouseDown}
                 menuVisibility={this.state.visible}
                 placesToChoose={this.placesToChoose}
                 showInfo={this.showInfo}/>

            <Footer/>

          </div>
        )
      }
    }


export default GoogleApiWrapper({
  apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(App);
