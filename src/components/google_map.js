import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount(){
    //third party library, that needs an html element where to render the map
    //the refs tell it which html element
    //different from a library such as react-google-maps
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render() {
    return <div ref="map" />
  }
}

export default GoogleMap
