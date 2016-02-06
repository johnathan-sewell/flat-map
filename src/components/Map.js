import React from 'react';

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this._initialiseMap();
        // this._addpropertiesToMap();
    }

    componentDidUpdate () {
        this._addpropertiesToMap();
    }

    _initialiseMap() {
        L.mapbox.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW5zZXdlbGwiLCJhIjoiY2lrYTZpcWRwMDAxbXdhbHk5bHF3Z2MxZCJ9.p9pbnBT6QSR8qS51vjxkHQ';

        this._map = L.mapbox.map(this._mapContainer, 'mapbox.streets')
            .setView([55.6761, 12.5683], 12);
        this._map.scrollWheelZoom.disable();
    }

    _addpropertiesToMap() {
        if (!this.props.properties || this.props.properties.length === 0) {
            return;
        }

        const geojson = this.props.properties.map(property => {
            return {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [property.latLon.lon, property.latLon.lat]
                },
                properties: {
                    title: property.address1,
                    description: property.propertyType.name,
                    'marker-color': '#3ca0d3',
                    'marker-size': 'large',
                    'marker-symbol': 'building'
                }
            };
        });

        if (this._propertiesLayer) {
            this._map.removeLayer(this._propertiesLayer);
        }
        this._propertiesLayer = L.mapbox.featureLayer()
            .setGeoJSON(geojson)
            .addTo(this._map);

        this._map.fitBounds(this._propertiesLayer.getBounds().pad(0.1));
    }

    render() {
        // const nodes = this.props.properties.map(property => (
        //     <div key={property.propertyId}>{property.address1}</div>
        // ));
        return (
            <div id="map" ref={c => this._mapContainer = c} style={{height: '600px'}}>
            </div>
        );
    }
}
