import { LOAD_PRODUCT_LIST, UPDATE_SELECTED_PRODUCT_LIST } from './types';

import productService from '../services/productService';

export const loadProductList = storageType => async dispatch => {
    const productList = await productService.getProductList();
    dispatch({
        type: LOAD_PRODUCT_LIST,
        payload: {
            productList
        }
    });
};

export const loadSelectedProducts = (
    storageType = 'localStorage'
) => async dispatch => {
    const selectedProducts = productService.getSelectedProducts(storageType);
    dispatch({
        type: UPDATE_SELECTED_PRODUCT_LIST,
        payload: {
            selectedProducts
        }
    });
};

export const selectProduct = ({
    id,
    storageType = 'localStorage'
}) => async dispatch => {
    const selectedProducts = productService.selectProduct({ id, storageType });
    dispatch({
        type: UPDATE_SELECTED_PRODUCT_LIST,
        payload: {
            selectedProducts
        }
    });
};

export const unselectProduct = ({
    id,
    storageType = 'localStorage'
}) => async dispatch => {
    const selectedProducts = productService.unselectProduct({ id, storageType });
    dispatch({
        type: UPDATE_SELECTED_PRODUCT_LIST,
        payload: {
            selectedProducts
        }
    });
};
