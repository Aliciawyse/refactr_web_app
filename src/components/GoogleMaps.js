import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import logo from "../styles/assets/img/logo/logo-2.png";
import marker from "../styles/assets/img/others/marker.png";

const AnyReactComponent = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img width={150} src={logo} alt={"Refactr Logo"} />
      <img width={25} src={marker} alt={"Map Marker for conference"} />
    </div>
  );
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.755,
      lng: -84.3846
    },
    zoom: 16
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "520px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyATWJt41hKiNc8O8tklrhQ_OxDbz21mdyw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={33.755} lng={-84.3846} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
