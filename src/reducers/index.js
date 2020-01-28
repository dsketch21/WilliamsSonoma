import { combineReducers } from 'redux';
import products from './products';
import settings from './settings';

const reducers = {
    products,
    settings
};

export default combineReducers(reducers);
