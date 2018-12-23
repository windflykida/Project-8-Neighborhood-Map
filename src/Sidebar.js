import React from "react";
import "./App.css";





// https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm


class Sidebar extends React.Component {




     render(){



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
                  >
                  <div>


                        <ul value="Łódź"
                            onClick={(event) => this.props.hoops(event)}
                           > Łódź     </ul>
                        <ul value="Wrocław"> Wrocław  </ul>
                        <ul value="Katowice"> Katowice </ul>
                        <ul value="Kraków"> Kraków    </ul>
                        <ul value="Warszawa">Warszawa  </ul>
                        <ul value="Ostrava"> Ostrava  </ul>
                        <ul value="Brno">Brno      </ul>
                        <ul value="Poznań"> Poznań   </ul>

                    {/* try to find good functions to connect list with marker */}
                        <ul value="Tychy"> Tychy    </ul>



                   </div>
          </aside>

        <aside id = "sidebar-right">

        </aside>
      </div>
        </div>
       )
     }
   };



export default Sidebar;
