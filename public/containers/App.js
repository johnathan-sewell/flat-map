import React from 'react';
import * as actionCreators from '../actions/actionCreators';

import Map from './Map';
import Menu from './Menu';

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
