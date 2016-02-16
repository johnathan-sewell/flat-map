/*
 *  a pure function that takes the previous state and an action, and returns the next state,
 * never write directly to previous state or its fields
 */
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    properties: [],
    filters: [{
        id: 1,
        name: 'Villa',
        checked: true
    }, {
        id: 3,
        name: 'Andelsbolig', /*shared ownership*/
        checked: true
    }, {
        id: 4,
        name: 'Ejerlejlighed',  /*appartment*/
        checked: true
    }, {
        id: 8,
        name: 'Villalejlighed',
        checked: true
    }],
    dataSourceId: 'data1'
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_DATA_SOURCE:
            return Object.assign({}, state, {
                dataSourceId: action.dataSourceId
            });
        case actionTypes.RECEIVE_PROPERTIES:
            //don't mutate state (use Object.assign)
            return Object.assign({}, state, {
                properties: action.properties
            });
        case actionTypes.APPLY_FILTER:
            return Object.assign({}, state, {
                filters: state.filters.map(filter => {
                    if (filter.id === action.filter.id) {
                        return Object.assign({}, filter, action.filter);
                    }
                    return filter;
                })
            });
        default:
            // return the previous state for any unknown actions
            return state;
    }
}

export default appReducer;
