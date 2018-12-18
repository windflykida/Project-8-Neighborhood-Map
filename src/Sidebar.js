
import React from "react";
import "./App.css";
import Modal from "react-modal";
import Menu from "./img/menu-button.svg";
import Header from "./Header.js";

// https://www.npmjs.com/package/react-modal



class Sidebar extends React.Component {



     render(){

       let visibility = "hide";

        if(this.props.menuVisibility){
          visibility = "show";
        }

       return (

         <div className =" sidebar-container">


         <aside id = "sidebar-left"
           onMouseDown={this.props.handleMouseDown}
           className={visibility}>

                <ul><a href="#"> Łódź     </a></ul>
                <ul><a href="#"> Wrocław  </a></ul>
                <ul><a href="#"> Katowice </a></ul>
                <ul><a href="#"> Kraków   </a></ul>
                <ul><a href="#"> Warszawa </a></ul>
                <ul><a href="#"> Ostrava  </a></ul>
                <ul><a href="#"> Brno     </a></ul>
                <ul><a href="#"> Poznań   </a></ul>
              <ul><a href="#"> Tychy      </a></ul>

        </aside>

        <aside id = "sidebar-right">


        </aside>
      </div>



       )
     }
   }



export default Sidebar;
