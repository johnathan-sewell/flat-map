import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';

// import $  from './lib/jquery-2.2.0';    //just using this for .ajax - replace?
import './lib/css/semantic.css';

// import { receiveProperties } from './actions/actions';
import rootReducer from './reducers/rootReducer';
import App from './containers/App';


ReactDOM.render(<App store={createStore(rootReducer)} / > ,
    document.getElementById('root')
);

// $.getJSON('data/data1.json', data => {
//     store.dispatch(receiveProperties(data));
// });

// store.dispatch(receiveProperties([{id: 3}]));

// unsubscribe();

