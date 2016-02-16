import assert from 'assert';
import * as actionTypes from '../../src/constants/actionTypes';
import * as actionCreators from '../../src/actions/actionCreators';

describe('actionCreators', () => {

    describe('selectDataSource', () => {
        const action = actionCreators.selectDataSource(2);

        it('creates an action of type SELECT_DATA_SOURCE', () => {
            assert.equal(action.type, actionTypes.SELECT_DATA_SOURCE);
        });

        it('creates and action with the data source id', () => {
            assert.equal(action.dataSourceId, 2);
        });
    });

    describe('receiveProperties', () => {
        const propertyFixture = {
            propertyType: {
                propertyTypeId: 1,
                name: 'Villa'
            },
            price: 6500000,
            netto: 29633,
            brutto: 35968
        };
        const action = actionCreators.receiveProperties(propertyFixture);

        it('creates an action of type RECEIVE_PROPERTIES', () => {
            assert.equal(action.type, actionTypes.RECEIVE_PROPERTIES);
        });

        it('creates an action with properties', () => {
            assert.equal(action.properties, propertyFixture);
        });
    });

    describe('applyFilter', () => {
        const filterFixture = {
            id: 1,
            name: 'Villa',
            checked: true
        };
        const action = actionCreators.applyFilter(filterFixture);

        it('creates an action of type APPLY_FILTER', () => {
            assert.equal(action.type, actionTypes.APPLY_FILTER);
        });

        it('creates an action with the filter', () => {
            assert.equal(action.filter, filterFixture);
        });
    });
});
