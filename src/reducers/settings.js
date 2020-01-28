import { UPDATE_STORAGE_TYPE } from '../actions/types';

const initialState = {
    storageType: localStorage.getItem('storageMethod') || 'localStorage'
};

const settings = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STORAGE_TYPE:
            return {
                ...state,
                storageType: action.payload.storageType
            };
        default:
            return state;
    }
};

export default settings;
