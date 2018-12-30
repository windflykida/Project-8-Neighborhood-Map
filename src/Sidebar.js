import React from "react";
import "./App.css";

// https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm

class Sidebar extends React.Component {


   render() {

     let visibility = "hide";

     if (this.props.menuVisibility) {
        visibility = "show";
      }

     return (

      <div>
       <div className="sidebar-container"
             aria-label="places filter">
         <aside id = "sidebar-left"
                className={visibility}
                >

          <input type ="text"
                 placeholder ="Search..."
                 tabIndex ="0"
                 value={this.props.query}
                 onChange={query => this.props.filterPlaces(query.target.value)}
                  />

          <div> {
                 this.props.filteredPlaces.map((place)=>(
                 <ul key={place.id}
                     onClick={(event) => this.props.handleClick(event, place.name)}
                    // onClick={(event) => this.props.loadImages(event)}
                 >
                  {place.name}{this.props.infowindowOpenId}
                  </ul>
               ))}

                   {this.props.filteredPlaces.length === 0 && (
                   <ul>Not found... Try again </ul>)}
          </div>
         </aside>

         <aside id = "sidebar-right"
                className={visibility}
         >

          <div className="gallery">
          
          </div>
        }

      </aside>
    </div>
  </div>
  )
 }
};



export default Sidebar;
