import React from 'react';
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';


export class MapContainer extends React.Component {
    constructor(){
        super();

        this.state = {
            markers: [
                {lat: 42.5655024, lng: -71.4283594 },
                {lat: 42.2793105, lng: -71.6063217 },
                {lat: 42.5185249, lng: -71.1024274 },
                {lat: 40.723642, lng: -74.052813 },
                {lat: 42.4131906, lng: -71.1725491 }
            ],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    render(){
        const style = {
            width: '100%',
            height: '70%'
          }
        //const style = [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
          const containerStyle = {
            position: 'relative',  
            width: '100%',
            height: '100%'
          }
        return (
            <Map 
                google={this.props.google} 
                zoom={7}
                style={style}
                initialCenter={{
                    lat: 42.5655024,
                    lng: -71.4283594
                }}>
                {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}

                {/* <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                    <h1>here is the first location</h1>
                    </div>
                </InfoWindow> */}
                {/* {this.state.markers.map((coords, index) => <Marker key={`marker-${index}`} position={coords}/>)} */}

                <Marker
                title="CodeWiz Westford"
                id={1}
                position={{lat: 42.5655024, lng: -71.4283594 }}
                draggable={false}
                onClick={this.onMarkerClick}
                >
                    <InfoWindow
                        visible={this.state.showingInfoWindow}
                        >
                        <div className="info-window">
                            <p>Click on the map or drag the marker to select location where the incident occurred</p>
                        </div>
                    </InfoWindow>
                </Marker>

                <Marker
                title="CodeWiz Westborough"
                id={2}
                position={{lat: 42.2793105, lng: -71.6063217 }}
                draggable={false}
                onClick={this.onMarkerClick}
                >
                    <InfoWindow
                        visible={this.state.showingInfoWindow}
                        >
                        <div className="info-window">
                            <p>Please work</p>
                        </div>
                    </InfoWindow>
                </Marker>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQieQqRCrRv4P46a82UG5gVHcqkvm9Qgc'
})(MapContainer)