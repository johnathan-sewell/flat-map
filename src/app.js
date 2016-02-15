import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './containers/App';

ReactDOM.render(<App store={createStore(rootReducer)} / > ,
    document.getElementById('root')
);
