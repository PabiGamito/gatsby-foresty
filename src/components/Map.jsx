import React, {Component} from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

export class Map extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    }
  }

  handleToggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleToggleClose() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
      defaultOptions={{
        // How zoomed in you want the map to start at (always required)
        zoom: 14,
        // block scrolling and moving around the map
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,

        // The latitude and longitude to center the map (always required)
        center: {lat: 45.740240, lng: 4.819484}, // Lyon
        disableDefaultUI: true,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
              "featureType": "administrative",
              "elementType": "labels",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [{
                  "visibility": "on"
              }, {
                  "color": "#e3e3e3"
              }]
          }, {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [{
                  "visibility": "off"
              }, {
                  "color": "#9c9696"
              }]
          }, {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "landscape.man_made",
              "elementType": "labels.text.fill",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "landscape.man_made",
              "elementType": "labels.text.stroke",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "landscape.man_made",
              "elementType": "labels.icon",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "landscape.natural",
              "elementType": "labels",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [{
                  "visibility": "on"
              }]
          }, {
              "featureType": "poi.park",
              "elementType": "geometry.stroke",
              "stylers": [{
                  "hue": "#4eff00"
              }, {
                  "visibility": "off"
              }]
          }, {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{
                  "color": "#cccccc"
              }]
          }, {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "transit",
              "elementType": "labels.icon",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "transit.line",
              "elementType": "geometry.stroke",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "transit.line",
              "elementType": "labels.text",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "transit.station.airport",
              "elementType": "geometry",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "transit.station.airport",
              "elementType": "labels",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#FFFFFF"
              }]
          }, {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [{
                  "visibility": "on"
              }, {
                  "color": "#bfe6ea"
              }]
          }, {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "water",
              "elementType": "labels.icon",
              "stylers": [{
                  "visibility": "off"
              }]
          }]
      }}
      >
        {/* <Marker lat={45.740551} lng={4.819484} /> */}
        <Marker
          position={{lat: 45.740551, lng: 4.819484}}
          icon={require('./wp-content/themes/ilymun-wp-theme/images/optimized/location-pin.png')}
          title='ILYMUN Conference Location'
          onClick={() => this.handleToggleOpen()}
        >
          { this.state.isOpen && 
          <InfoWindow  onCloseClick={this.props.handleCloseCall}>
            <div id="map-popup-content">
              <h5>This is where ILYMUN takes place</h5>
              <p> At Hôtel de Région, <br /> 1 Esplanade François Mitterrand, 69002, Lyon, France </p>
            </div>
          </InfoWindow>}
        </Marker>
      </GoogleMap>
    ));

    return(
        <div>
          <GoogleMapExample
            containerElement={ <div style={{ height: `500px`, width: '100vw' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
          />
        </div>
    );
  }
}

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// ));

// export class Map extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }