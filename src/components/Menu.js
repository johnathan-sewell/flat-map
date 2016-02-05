import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(e) {
        const dataSourceId = e.target.getAttribute('data-id');
        this.props.onSelectDataSource(dataSourceId);
    }

    _getCssClass(dataSourceId) {
        return (dataSourceId === this.props.dataSourceId ? 'active item' : 'item');
    }

    render() {
        return (
            <div className='ui stackable container menu'>
                <div>{this.props.dataSourceId}</div>
                <a className={this._getCssClass('data1')} data-id='data1' onClick={this._handleClick}>Data Source 1</a>
                <a className={this._getCssClass('data2')} data-id='data2' onClick={this._handleClick}>Data Source 2</a>
                <a className={this._getCssClass('data3')} data-id='data3' onClick={this._handleClick}>Data Source 3</a>
            </div>
        );
    }
}
