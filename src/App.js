import React from "react";
import ReactDOM from "react-dom";
import {GoogleApiWrapper} from "google-maps-react";
import "./App.css";
import Map from "./Map.js";
import Sidebar from "./Sidebar.js";
import Header from "./Header.js";
import Footer from "./Footer.js";


 class App extends React.Component {

   constructor(props, context){
     super(props, context);

       this.state = {
         // sidebar will show after clicking the hamburger icon
        visible: false,


       };

       this.handleMouseDown = this.handleMouseDown.bind(this);
       this.toggleMenu = this.toggleMenu.bind(this);
     }

// function open and close sidebar

         handleMouseDown=(event)=>{
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

// https://ourcodeworld.com/articles/read/327/how-to-execute-child-component-function-from-the-parent-component-in-react
         hoops = () => {
           this.refs.child.handleClick();
         }

  render () {

    return (
          <div>
            <Map
                google ={this.props.google}
                handleClick ={this.handleClick}/>

            <Header
                handleMouseDown={this.handleMouseDown}/>

            <Sidebar
                 handleMouseDown={this.handleMouseDown}

                 menuVisibility={this.state.visible}
                 hoops={this.hoops}>

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
