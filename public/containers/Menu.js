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
                <a className={this._getCssClass('json1')} data-id='json1' onClick={this._handleClick}>JSON 1</a>
                <a className={this._getCssClass('json2')} data-id='json2' onClick={this._handleClick}>JSON 2</a>
                <a className={this._getCssClass('json3')} data-id='json3' onClick={this._handleClick}>JSON 3</a>
            </div>
        );
    }
}
