import { LOAD_PRODUCT_LIST, UPDATE_SELECTED_PRODUCT_LIST } from '../actions/types';

const initialState = {
    selectedProducts: []
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload.productList
            };
        case UPDATE_SELECTED_PRODUCT_LIST:
            return {
                ...state,
                selectedProducts: action.payload.selectedProducts
            };
        default:
            return state;
    }
};

export default products;
