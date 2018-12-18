
import React from "react";
import "./App.css";
import Modal from "react-modal";
import Menu from "./img/menu-button.svg";

// https://www.npmjs.com/package/react-modal



class Sidebar extends React.Component {

   constructor(props){
     super(props);

       this.state = {
         // sidebar will show after clicking the hamburger icon
        showModal: true,
       };
     }

     render(){

       return(
         <div className =" sidebar-container">
         <aside id = "sidebar-left">
           <div className ="list">

                <ul> Łódź     </ul>
                <ul> Wrocław  </ul>
                <ul> Wrocław  </ul>
                <ul> Katowice </ul>
                <ul> Kraków   </ul>
                <ul> Warszawa </ul>
                <ul> Ostrava  </ul>
                <ul> Brno     </ul>
                <ul> Poznań   </ul>
                <ul> Tychy    </ul>
          </div>
        </aside>

        <aside id = "sidebar-right">


        </aside>
      </div>



       )
     }
   }



export default Sidebar;
