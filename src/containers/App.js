import React from 'react';
import * as actionCreators from '../actions/actionCreators';
import * as apiClient from '../apiClient';
import Map from '../components/Map';
import Cards from '../components/Cards';
import Menu from '../components/Menu';
import TypeFilters from '../components/TypeFilters';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this._handleSelectDataSource = this._handleSelectDataSource.bind(this);
        this._handleFilter = this._handleFilter.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
        this._fetchProperties('data1');
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _fetchProperties(dataSourceId) {
        apiClient.fetchProperties(dataSourceId, properties => {
            this.props.store.dispatch(actionCreators.receiveProperties(properties));
        }, errorMessage => {
            this.props.store.dispatch(actionCreators.failedToReceiveProperties(errorMessage));
        });
    }

    _handleSelectDataSource(dataSourceId) {
        this.props.store.dispatch(actionCreators.selectDataSource(dataSourceId));

        this._fetchProperties(dataSourceId);
    }

    _handleFilter(filter) {
        this.props.store.dispatch(actionCreators.applyFilter(filter));
    }

    _getVisibleProperties() {
        const state = this.props.store.getState();

        const visiblePropertyTypes = state.filters
            .filter(filter => filter.checked)
            .map(filter => filter.id);

        return state.properties.filter(property =>
            visiblePropertyTypes.includes(property.propertyType.propertyTypeId));
    }
    render() {
        const state = this.props.store.getState();

        const mapStyles = {
            padding: 0
        };

        return (

            <div className="App ui padded stackable mobile reversed grid">

                <div className="ten wide column" style={mapStyles}>
                    <Map properties={this._getVisibleProperties()}/>
                </div>

                <div className="six wide column">
                    <div className='ui stackable grid'>
                        <div className="sixteen wide column">
                            <Menu dataSourceId={state.dataSourceId}
                                handleSelectDataSource={this._handleSelectDataSource} />
                        </div>
                        <div className="sixteen wide column">
                            <TypeFilters filters={state.filters}
                                visiblePropertiesCount={this._getVisibleProperties().length}
                                handleFilter={this._handleFilter} />
                        </div>
                        <div className="computer only tablet only sixteen wide column">
                            <Cards properties={this._getVisibleProperties()}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
