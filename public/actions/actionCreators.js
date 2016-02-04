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

export function receiveProperties(json) {
    return {
        type: 'RECEIVE_PROPERTIES',
        properties: json
    };
}
