import React from 'react';
import * as actionCreators from '../actions/actionCreators';
import * as apiClient from '../apiClient';

import Map from './Map';
import Menu from '../components/Menu';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this._handleSelectDataSource = this._handleSelectDataSource.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _handleSelectDataSource(dataSourceId) {
        this.props.store.dispatch(actionCreators.selectDataSource(dataSourceId));

        apiClient.fetchProperties(dataSourceId, properties => {
            this.props.store.dispatch(actionCreators.receiveProperties(properties));
        }, errorMessage => {
            this.props.store.dispatch(actionCreators.failedToReceiveProperties(errorMessage));
        });

    }

    render() {
        const state = this.props.store.getState();
        return (
            <div className="App">
                <Menu dataSourceId={state.dataSourceId} onSelectDataSource={this._handleSelectDataSource} />
                <Map store={this.props.store}/>
            </div>
        );
    }
}
// App.propTypes = { initialCount: React.PropTypes.number };
// App.defaultProps = { initialCount: 0 };
