import React from "react";

import { IMapProps, Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = [
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#eaeaea",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#cccccc",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        lightness: 100,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        lightness: 700,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#1f1f23",
      },
    ],
  },
];

class MapContainer extends React.Component<IMapProps, any> {
  static defaultProps: Partial<IMapProps> = { style: mapStyles };

  render() {
    return (
      <Map
        className={this.props.className}
        google={this.props.google}
        zoom={12}
        initialCenter={this.props.initialCenter}
        styles={this.props.style}
        scrollwheel={false}
        keyboardShortcuts={false}
        disableDoubleClickZoom={false}
        zoomControl={false}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        panControl={false}
        rotateControl={false}
        fullscreenControl={false}
      >
        <Marker position={this.props.initialCenter} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.gcpAPIKey,
})(MapContainer);
