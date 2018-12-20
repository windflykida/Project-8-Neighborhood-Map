import React from "react";
import "./App.css";
import Map from "./Map.js";




// https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm


class Sidebar extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      markers:[]
    }
  }


  handleClick = (event) => {
     const  {markers}  = this.state.makers;
    event.preventDefault();

            this.markers.map((marker) => {
              if (marker.title === event.target.value) {

                window.google.maps.event.trigger(marker, "click");
              }
            })
          }

     render(){

        const handleClick = this.handleClick;
         let {showInfo} = this.props;

       let visibility = "hide";

        if(this.props.menuVisibility){
          visibility = "show";
        }

       return (

         <div className="sidebar-container"
              tabIndex="0"
              aria-label="sidebar">
           <aside id = "sidebar-left"

                  className={visibility}
                  >
                      {/* try to find good functions to connect list with marker */}

                      <ul value="Łódź"
                        onClick={(event) => this.markers.indefOf()}> Łódź     </ul>
                      <ul value="Wrocław"> Wrocław  </ul>
                      <ul value="Katowice"> Katowice </ul>
                      <ul value="Kraków"

                        /* try to find good functions to connect list with marker */
                        onClick ={(event) => this.handleClick(event)}>Kraków    </ul>
                      <ul value="Warszawa">Warszawa  </ul>
                      <ul value="Ostrava"> Ostrava  </ul>
                      <ul value="Brno">Brno      </ul>
                      <ul value="Poznań"> Poznań   </ul>

                  {/* try to find good functions to connect list with marker */}
                      <ul value="Tychy"
                         onClick={(event) => this.props.showInfo(event)}> Tychy    </ul>
          </aside>

        <aside id = "sidebar-right">

        </aside>
      </div>
       )
     }
   };



export default Sidebar;
