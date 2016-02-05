/*
 *  a pure function that takes the previous state and an action, and returns the next state,
  * never write directly to previous state or its fields
 */
// import { requestProperties } from './actions';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    properties: [],
    dataSourceId: 'data1'
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_DATA_SOURCE:
            return Object.assign({}, state, {
                dataSourceId: action.dataSourceId
            });
        case 'RECEIVE_PROPERTIES':
            //don't mutate state (use Object.assign)
            return Object.assign({}, state, {
                properties: action.properties
            });
        default:
            // return the previous state for any unknown actions
            return state;
    }
}

export default appReducer;
