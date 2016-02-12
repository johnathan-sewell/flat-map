import React from 'react';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const createCard = property =>
            <div className="card" key={property.propertyId}>
                <div className="content">
                    <div className="header">
                        {property.propertyType.name} - {property.address1}
                    </div>
                    <div className="meta">
                        {property.zipCode.name.trim()}{property.county.name.trim()}
                    </div>
                    <div className="description">
                        <div className="ui tiny horizontal statistics">
                            <div className="statistic">
                                <div className="value">
                                    {property.totalNumberOfRooms}
                                </div>
                                <div className="label">
                                    {property.totalNumberOfRooms === 1 ? 'Room' : 'Rooms'}
                                </div>
                            </div>
                            <div className="statistic">
                                <div className="value">
                                    {property.propertySizeAdvertized}
                                </div>
                                <div className="label">
                                    m<sup>2</sup>
                                </div>
                            </div>
                            <div className="statistic">
                                <div className="value">
                                    {property.price}
                                </div>
                                <div className="label">
                                    DKK
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;

        return (
            <div className="ui cards">
                {this.props.properties.length ? this.props.properties.map(createCard) : ''}
            </div>
        );
    }
}
