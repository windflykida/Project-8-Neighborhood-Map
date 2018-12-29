    import React from "react";
import "./App.css";
import escapeRegExp from "escape-string-regexp";



// https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm


class Sidebar extends React.Component {





     render() {
       const {places} = [];

       let {filterPlaces, filterMarkers} = this.props;

       let visibility = "hide";

        if(this.props.menuVisibility){
          visibility = "show";
        }


       return (

          <div>
         <div className="sidebar-container"
              tabIndex="0"
               aria-label="sidebar">
           <aside id = "sidebar-left"
                  className={visibility}
                  tabIndex="0"
                  >

            <input type ="text"
                   placeholder ="Search..."
                   tabIndex ="0"

                   value={this.props.query}
                    onChange={event => this.props.filtredPlaces(event.target.value)}
                    />
              <div>
                    <ul value="Łódź"
                        onClick={(event) => this.props.handleClick(event, "Łódź")}
                       > Łódź     </ul>
                    <ul value="Wrocław"
                      onClick={(event) => this.props.handleClick(event, "Wrocław")}> Wrocław  </ul>
                    <ul value="Katowice"
                    tabIndex="0"
                      onClick={(event) => this.props.handleClick(event, "Katowice")}> Katowice </ul>
                    <ul value="Kraków"
                      onClick={(event) => this.props.handleClick(event, "Kraków")}> Kraków    </ul>
                    <ul value="Warszawa"
                      onClick={(event) => this.props.handleClick(event, "Warszawa")}>Warszawa  </ul>
                    <ul value="Ostrava"
                      onClick={(event) => this.props.handleClick(event, "Ostrava")}> Ostrava  </ul>
                    <ul value="Brno"
                      onClick={(event) => this.props.handleClick(event, "Brno")}>Brno      </ul>
                    <ul value="Poznań"
                      onClick={(event) => this.props.handleClick(event, "Poznań")}> Poznań   </ul>

                {/* try to find good functions to connect list with marker */}
                    <ul value="Tychy"
                      onClick={(event) => this.props.handleClick(event, "Tychy")}> Tychy    </ul>



               </div>
          </aside>

        <aside id = "sidebar-right"

               className={visibility}

               >

          {/*this.props.filterMarkers.map((marker) => (
          								<li
          									key={marker.id}
          									className="list-item"

          									tabIndex="0"
          									aria-label={marker.name}
          								>{marker.name}</li>
          							))*/}

          {/*}  <ol className="marker-list"> {
      this.state.allMarkersFromChild.map((marker,i) => {
        return (
          <li key={i}>{this.marker.title}</li>
        )

      })


          }
        </ol> */}

        </aside>
      </div>
        </div>
       )
     }
   };



export default Sidebar;
