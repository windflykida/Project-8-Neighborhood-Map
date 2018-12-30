import React from "react";
import "./App.css";
import Map from "./Map";
import Header from "./Header";
import Footer from "./Footer";



 class App extends React.Component {

   constructor(props, context){
     super(props, context);

   this.state = {
    menuVisibility: false,
    pictures:[]
   }

   this.handleMouseDown = this.handleMouseDown.bind(this);
   this.toggleMenu = this.toggleMenu.bind(this);

   }

  // function open and close sidebar


  handleMouseDown = (event) => {
    this.toggleMenu();
    event.stopPropagation();
  }

  // method responsible for toggling whether visible is true or false.

  toggleMenu = () => {
    this.setState({
      menuVisibility: !this.state.menuVisibility
    });
  }

  render () {

    return (
      <div>

        <Map
            google ={this.props.google}
            menuVisibility={this.state.menuVisibility}
            toggleMenu={this.toggleMenu}

        />

        <Header
            handleMouseDown={this.handleMouseDown}
        />

        <Footer/>

      </div>
    )
  }
}


export default App;
