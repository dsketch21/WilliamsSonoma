import { UPDATE_STORAGE_TYPE } from '../actions/types';

export const setStorageMethod = storageType => async dispatch => {
    localStorage.setItem('storageMethod', storageType);
    dispatch({
        type: UPDATE_STORAGE_TYPE,
        payload: {
            storageType
        }
    });
};
