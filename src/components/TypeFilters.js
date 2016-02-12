import React from 'react';

export default class TypeFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e) {
        this.props.handleFilter({
            id: parseInt(e.target.value, 10),
            checked: e.target.checked
        });
    }

    render() {
        const noResultsMessage =
            <div className="ui info message">
                <div className="header">
                    Sorry, there are no properties to show.
                </div>
                <p>Try adjusting the filters.</p>
            </div>;

        const createInput = filter =>
                <div className="column" key={filter.id}>
                    <div className="ui toggle checkbox">
                        <input type="checkbox"
                            checked={filter.checked ? 'checked' : ''}
                            value={filter.id}
                            onChange={this._handleChange}>
                        </input>
                        <label>{filter.name}</label>
                    </div>
                </div>;

        return (
            <div className='Filters ui four column stackable grid'>
                {this.props.filters.map(createInput)}
                {this.props.visiblePropertiesCount === 0 ? noResultsMessage : ''}
            </div>
        );
    }
}
