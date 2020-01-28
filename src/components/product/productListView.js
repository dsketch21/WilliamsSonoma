import React from 'react';
import { connect } from 'react-redux';
import {
    loadProductList,
    loadSelectedProducts,
    selectProduct,
    unselectProduct
} from '../../actions/productActions';
import { unescape } from 'lodash';

import './productListView.scss';

class ProductView extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.props.loadProductList();
        this.props.loadSelectedProducts(this.props.storageType);
    }

    selectProduct(id) {
        this.props.selectProduct({
            id,
            storageType: this.props.storageType
        });
    }

    unselectProduct(id) {
        this.props.unselectProduct({
            id,
            storageType: this.props.storageType
        });
    }

    renderProductGrid() {
        const products = this.props.productList.groups;
        return products.map(p => (
            <div
                className={`cell small-12 medium-6 product ${
                    this.props.selectedProducts.length ? 'large-6' : ' large-3'
                }`}
                key={p.id}
                onClick={() => this.selectProduct(p.id)}
            >
                <p>
                    <img
                        alt={unescape(p.name)}
                        src={p.hero.href}
                        title={unescape(p.name)}
                    />
                </p>
                <h2 dangerouslySetInnerHTML={{ __html: p.name }}></h2>
                <h3>${p.price.selling}</h3>
            </div>
        ));
    }

    renderSelectedProductGrid() {
        const selectedProducts = this.props.selectedProducts;
        if (selectedProducts.length) {
            const products = this.props.productList.groups.filter(
                p => selectedProducts.indexOf(p.id) != -1
            );
            return products.map(p => (
                <div
                    className="cell small-12 medium-6 large-6 product"
                    key={p.id}
                    onClick={() => this.unselectProduct(p.id)}
                >
                    <p>
                        <img
                            alt={unescape(p.name)}
                            src={p.hero.href}
                            title={unescape(p.name)}
                        />
                    </p>
                    <h2 dangerouslySetInnerHTML={{ __html: p.name }}></h2>
                    <h3>${p.price.selling}</h3>
                </div>
            ));
        }
    }

    render() {
        return (
            <>
                {this.props.productList && (
                    <div className="grid-x product-list-view">
                        <div className="cell instructions">
                            <p>
                                Click a product
                                {this.props.selectedProducts.length
                                    ? ' in the left box'
                                    : ''}{' '}
                                to add it into {this.props.storageType}.
                                {this.props.selectedProducts.length
                                    ? ` Click a product in the right box to remove it from ${this.props.storageType}.`
                                    : ''}
                            </p>
                        </div>
                        <div
                            className={`cell products ${
                                this.props.selectedProducts.length
                                    ? 'products-selected small-6 medium-6 large-6'
                                    : 'large-12'
                            }`}
                        >
                            <div className="grid-x">{this.renderProductGrid()}</div>
                        </div>
                        {this.props.selectedProducts.length && (
                            <div className="cell selected-products small-6 medium-6 large-6">
                                <div className="grid-x">
                                    {this.renderSelectedProductGrid()}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    productList: state.products.productList,
    selectedProducts: state.products.selectedProducts,
    storageType: state.settings.storageType
});

export default connect(mapStateToProps, {
    loadProductList,
    loadSelectedProducts,
    selectProduct,
    unselectProduct
})(ProductView);
