import React from 'react';

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.properties.map(property => (
                    <div key={property.propertyId}>{property.address1}</div>
                ))}
            </div>
        );
    }
}
