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
                <div className="header">Sorry, there are no properties to show.</div>
                <p>Try adjusting the filters.</p>
            </div>;

        const createInput = filter =>
                <div className="ui toggle checkbox" key={filter.id}>
                    <input type="checkbox"
                        checked={filter.checked ? 'checked' : ''}
                        value={filter.id}
                        id={filter.id}
                        onChange={this._handleChange}>
                    </input>
                    <label htmlFor={filter.id}>{filter.name}</label>
                </div>;

        return (
            <div className='Filters ui grid'>
                {this.props.filters.map(createInput)}
                <div className="sixteen wide column">
                    {this.props.visiblePropertiesCount === 0 ? noResultsMessage : ''}
                </div>
            </div>
        );
    }
}
