import assert from 'assert';
import rootReducer from '../../src/reducers/rootReducer';
import * as actionTypes from '../../src/constants/actionTypes';

describe('rootReducer', () => {
    it('should return the initial state', () => {
        const expectedState = {
            properties: [],
            filters: [{
                id: 1,
                name: 'Villa',
                checked: true
            }, {
                id: 3,
                name: 'Andelsbolig',
                checked: true
            }, {
                id: 4,
                name: 'Ejerlejlighed',
                checked: true
            }, {
                id: 8,
                name: 'Villalejlighed',
                checked: true
            }],
            dataSourceId: 'data1'
        };
        const actualState = rootReducer(undefined, {});
        assert.deepEqual(expectedState, actualState);
    });
});
