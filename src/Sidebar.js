import React from "react";
import "./App.css";
import escapeRegExp from "escape-string-regexp";



class Sidebar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
            allMarkersFromApp: null
         };
      }

  componentDidMount(){
    this.initMarkers();
    let {markers} = this.state;
    this.setState({ markers : markers });
    //let { markers} = this.state;
   }
   initMarkers = () => {
    console.log("markers sidebar");

    //  QueryFilter = () => {
if (this.props.allMarkersFromChild === null) {
  console.log("null")
} else {
  console.log("są dane")
  this.setState({ allMarkersFromApp: this.props.allMarkersFromChild});
  //this.props.allMarkersFromChild.map((marker) => {
//    console.log(this.marker.title);
}
        //this.props.allMarkersFromChild.map((marker) => {
      //    console.log(this.marker.title);
        //  return (
          //  <li key={i}>
          //  {this.marker.title}
          //  </li>
          //)
      //})
      }



     render() {

        let {allMarkersFromChild} = this.props;
        let {filterPlaces} = this.props;
        let visibility = "hide";

        if (this.props.menuVisibility) {
          visibility = "show";
        }


   return (

    <div>
       <div className="sidebar-container"
            tabIndex="0"
            aria-label="sidebar">
         <aside id = "sidebar-left"
                className={visibility}>

          <input type ="text"
               placeholder ="Search..."
               value={this.props.query}
                onChange={event => this.props.updateQuery(event.target.value)}
               />
             <div className="list-view">

              <ul value="Łódź"
                  onClick={(event) => this.props.handleClick(event, "Łódź")}
                 > Łódź     </ul>
              <ul value="Wrocław"
                onClick={(event) => this.props.handleClick(event, "Wrocław")}> Wrocław  </ul>
              <ul value="Katowice"
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
              <ul value="Tychy"
                onClick={(event) => this.props.handleClick(event, "Tychy")}> Tychy    </ul>
              </div>

        </aside>

        <aside id = "sidebar-right"
            className={visibility}>
                {/*
                //  QueryFilter = () => {
              //  if (this.props.allMarkersFromChild === null) {
              //    console.log("null")
              //  }
              //  else {
              //      this.props.allMarkersFromChild.map((marker) => {
                    //  console.log(this.marker.title);
                    //  return (
                      //  <li key={i}>
                      //  {this.marker.title}
                      //  </li>
                      //)
                  //})
                //}



            // */}




              </aside>
    </div>
  </div>
  )
 }
}




export default Sidebar;
