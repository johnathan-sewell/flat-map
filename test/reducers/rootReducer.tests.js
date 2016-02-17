import assert from 'assert';
import rootReducer from '../../src/reducers/rootReducer';
import * as actionTypes from '../../src/constants/actionTypes';

const getInitialState = () => {
    return {
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
};

describe('rootReducer', () => {
    it('should return the initial state', () => {
        const actualState = rootReducer(undefined, {});
        assert.deepEqual(actualState, getInitialState());
    });

    describe('SELECT_DATA_SOURCE action', () => {
        let actualState;

        before(() => {
            actualState = rootReducer(getInitialState(), {
                type: actionTypes.SELECT_DATA_SOURCE,
                dataSourceId: 'data1'
            });
        });

        it('updates the data source', () => {
            assert.equal(actualState.dataSourceId, 'data1');
        });
    });
});
