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
       };
       this.handleMouseDown = this.handleMouseDown.bind(this);
       this.toggleMenu = this.toggleMenu.bind(this);
     }

     handleMouseDown(event){
       this.toggleMenu();
       console.log("clicked");
       event.stopPropagation();
     }

     toggleMenu() {
       this.setState({
         visible: !this.state.visible
       });
     }




  render (

  ) {
    return (
          <div>
            <Map
                google ={this.props.google}
                map={this.state}
            />
            <Header
            handleMouseDown={this.handleMouseDown}/>
          <Sidebar
             handleMouseDown={this.handleMouseDown}
             menuVisibility={this.state.visible}/>
          <Footer/>




          </div>
        )
      }
    }


export default GoogleApiWrapper({
  apiKey:"AIzaSyAjfYACbqoCeUt-I01rTaQKGEgmMIYCtDs"})(App);
