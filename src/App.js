import React from "react";
import ReactDOM from "react-dom";
import {GoogleApiWrapper} from "google-maps-react";
import "./App.css";
import Map from "./Map";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";


 class App extends React.Component {

   constructor(props, context){
     super(props, context);

   this.state = {
     // sidebar will show after clicking the hamburger icon
    visible: false,
    allMarkersFromChild: null
   };

   this.handleMouseDown = this.handleMouseDown.bind(this);
   this.toggleMenu = this.toggleMenu.bind(this);
   //  this.handleClick = this.handleClick.bind(this);
   }

    giveMeMarkersMyChild = (markersFromChild) => {
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

    // Znajdź string
    ZnajdzString = (event) => {
      console.log("Wywolales funkcję z Sidebar.js na zdarzenie onChange");
    }

    // https://ourcodeworld.com/articles/read/327/how-to-execute-child-component-function-from-the-parent-component-in-react

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


  render () {

    return (
      <div>
        <Map
            google ={this.props.google}
            handleClick ={this.handleClick}
            giveMarkersToParent ={this.giveMeMarkersMyChild}/>
        <Header
            handleMouseDown={this.handleMouseDown}/>

        <Sidebar
             handleMouseDown={this.handleMouseDown}
             menuVisibility={this.state.visible}
             handleClick ={this.handleClick}
             onChange={this.ZnajdzString}>

             <div>
             <Map ref="child"/>
             </div>
        </Sidebar>

        <Footer/>

      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(App);
