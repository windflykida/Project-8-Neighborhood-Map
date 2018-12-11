import React from "react";
import Map from "./Map";




class Markers extends React.Component {

  state = {
    places: [
    {name: "Łódź",        location:{lat:51.759445,  lng:19.457216}},
    {name: "Wroclaw",     location:{lat:51.107883,	 lng:17.038538}},
    {name: "Katowice",    location:{lat:50.270908,  lng:19.039993}},
    {name: "Kraków",      location:{lat:50.049683,  lng:19.944544}},
    {name: "Warsaw",      location:{lat:52.237049,  lng:21.017532}},
    {name: "Ostrava",     location:{lat:49.820923,	 lng:18.262524}},
    {name: "Brno",        location:{lat:49.195061,  lng:16.606836}},
    {name: "Poznań",      location:{lat:52.409538,	 lng:16.931992}},
    {name: "Tychy",       location:{lat:50.124981,  lng:19.009438}}
  ],
}


    addMarkers = () => {
      let {infowindow} = this.state;
      let markers = [];
      let newInfowindow = new window.google.maps.InfoWindow();
      let bounds = new window.google.maps.InfoWindow();


    this.state.places.forEach((location) => {
      let marker = new window.google.maps.Marker({
        position:{
          lat:location.location.lat,
          lng:location.location.lng
        },
        map: this.map,
        title: location.name,
    })
    markers.push(marker);
    bounds.extend(marker.position);

    marker.addListener("click",() => {
      this.populateInfoWindow(marker, infowindow)
    });
    this.setState((state) => ({
            markers: [...state.markers, marker]
            }))
            })
    this.map.fitBounds(bounds);
    }


    populateInfoWindow = (marker,infowindow) => {

        if (infowindow.marker !== marker){
          infowindow.marker = marker;
          infowindow.setContent(`<div>${marker.title}</div>`)
          infowindow.open(this.map, marker)
          infowindow.addListener("closeClick", () => {
            infowindow.setMarker(null)
          })
      }
    }


  render(){




    return (
      <div className ="points">
      <Map
       addmarkers={this.addMarkers}

      />
      </div>

    )







  }
}


export default Markers;
