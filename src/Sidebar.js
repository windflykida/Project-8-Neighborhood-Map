
import React from "react";


class Sidebar extends React.Component {

   toggleSidebar=()=>{
     document.getElementsByClassName("sidebar-container").classList.toggle("active");
     }




  render() {
      return (
        <aside className="sidebar-container"
               onClick={this.props.toggleSidebar}
               tabIndex="0">
        </aside>








    )

}
}

export default Sidebar;
