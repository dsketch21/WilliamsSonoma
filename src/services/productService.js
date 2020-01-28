import mockProductList from '../../mocks/productList';
const SELECTED_PRODUCTS = 'selectedProducts';
const productService = {};

productService.getProductList = async () =>
    new Promise(resolve => resolve(mockProductList));

productService.getSelectedProducts = storageType => {
    if (storageType == 'localStorage') {
        return JSON.parse(localStorage.getItem(SELECTED_PRODUCTS)) || [];
    } else {
        return JSON.parse(sessionStorage.getItem(SELECTED_PRODUCTS)) || [];
    }
};
productService.selectProduct = ({ id, storageType }) => {
    const selectedProducts = productService.getSelectedProducts(storageType);
    if (selectedProducts.indexOf(id) == -1) {
        selectedProducts.push(id);
        productService.setSelectedProducts({ selectedProducts, storageType });
    }
    return selectedProducts;
};

productService.setSelectedProducts = ({ selectedProducts, storageType }) => {
    if (storageType == 'localStorage') {
        localStorage.setItem(SELECTED_PRODUCTS, JSON.stringify(selectedProducts));
    } else {
        sessionStorage.setItem(SELECTED_PRODUCTS, JSON.stringify(selectedProducts));
    }
};

productService.unselectProduct = ({ id, storageType }) => {
    let selectedProducts = productService.getSelectedProducts(storageType);
    if (selectedProducts.indexOf(id) > -1) {
        selectedProducts = selectedProducts.filter(pid => pid != id);
        productService.setSelectedProducts({ selectedProducts, storageType });
    }
    return selectedProducts;
};

export default productService;
