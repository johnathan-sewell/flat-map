import React from 'react';
import * as actionCreators from '../actions/actionCreators';
import * as apiClient from '../apiClient';
import Map from '../components/Map';
import Menu from '../components/Menu';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this._handleSelectDataSource = this._handleSelectDataSource.bind(this);

        this._fetchProperties('data1');
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
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

    render() {
        const reduxState = this.props.store.getState();
        return (
            <div className="App">
                <Menu dataSourceId={reduxState.dataSourceId} onSelectDataSource={this._handleSelectDataSource} />
                <Map properties={reduxState.properties}/>
            </div>
        );
    }
}
