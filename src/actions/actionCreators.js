import * as actionTypes from '../constants/actionTypes';

export function selectDataSource(dataSourceId) {
    return {
        type: actionTypes.SELECT_DATA_SOURCE,
        dataSourceId
    };
}
export function requestProperties() {
    return {
        type: 'REQUEST_PROPERTIES'
    };
}

export function receiveProperties(properties) {
    return {
        type: 'RECEIVE_PROPERTIES',
        properties
    };
}

export function filter(filter) {
    return {
        type: 'APPLY_FILTER',
        filter
    };
}
