import * as actionTypes from '../constants/actionTypes';

export function selectDataSource(dataSourceId) {
    return {
        type: actionTypes.SELECT_DATA_SOURCE,
        dataSourceId
    };
}

export function receiveProperties(properties) {
    return {
        type: actionTypes.RECEIVE_PROPERTIES,
        properties
    };
}

export function applyFilter(filter) {
    return {
        type: 'APPLY_FILTER',
        filter
    };
}
