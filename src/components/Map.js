import React from 'react';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._initialiseMap = this._initialiseMap.bind(this);
        this._addpropertiesToMap = this._addpropertiesToMap.bind(this);
    }

    componentDidMount() {
        this._initialiseMap();
    }

    componentDidUpdate () {
        this._addpropertiesToMap();
    }

    _initialiseMap() {
        L.mapbox.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW5zZXdlbGwiLCJhIjoiY2lrYTZpcWRwMDAxbXdhbHk5bHF3Z2MxZCJ9.p9pbnBT6QSR8qS51vjxkHQ';

        this._map = L.mapbox.map(this._mapContainer, 'mapbox.streets', {
            zoomControl: true,
            scrollWheelZoom: false
        }).setView([55.6761, 12.5683], 12);
    }

    _addpropertiesToMap() {
        const geojson = this.props.properties.map(property => {
            return {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [property.latLon.lon, property.latLon.lat]
                },
                properties: {
                    title: `${property.propertyType.name} - ${property.address1}`,
                    description:  `${property.totalNumberOfRooms} ${property.totalNumberOfRooms === 1 ? 'Room' : 'Rooms'} - ${property.propertySizeAdvertized}m<sup>2</sup> - ${property.price}DKK`,
                    'marker-color': '#3ca0d3',
                    'marker-size': 'large',
                    'marker-symbol': 'building'
                }
            };
        });

        if (this._propertiesLayer) {
            this._map.removeLayer(this._propertiesLayer);
        }
        if (this.props.properties.length) {
            this._propertiesLayer = L.mapbox.featureLayer()
                .setGeoJSON(geojson)
                .addTo(this._map);

            this._map.fitBounds(this._propertiesLayer.getBounds().pad(0.1));

        }
    }

    render() {
        const mapStyle = {
            height: '100%'
        };
        return (
            <div id="map" className="Map" ref={c => this._mapContainer = c} style={mapStyle}>
            </div>
        );
    }
}
