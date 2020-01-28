import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import App from './components/app';

const initalState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initalState, applyMiddleware(...middleware));
const rootElement = document.getElementById('app');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
