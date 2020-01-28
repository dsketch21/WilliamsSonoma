import React from 'react';
import { connect } from 'react-redux';
import { loadSelectedProducts } from '../../actions/productActions';
import { setStorageMethod } from '../../actions/settingsActions';

import './footer.scss';

class Footer extends React.Component {
    updateStorageMethod(storageType) {
        this.props.setStorageMethod(storageType);
        this.props.loadSelectedProducts(storageType);
    }

    render() {
        return (
            <>
                <footer className="grid-x">
                    <div className="cell medium-6 large-6">
                        Data is currently being stored in {this.props.storageType}.
                    </div>
                    <div className="cell medium-6 large-6">
                        <p>
                            <a
                                className={`button small${
                                    this.props.storageType == 'localStorage'
                                        ? ' active'
                                        : ''
                                }`}
                                onClick={() =>
                                    this.updateStorageMethod('localStorage')
                                }
                            >
                                Local Storage
                            </a>
                            <a
                                className={`button small${
                                    this.props.storageType != 'localStorage'
                                        ? ' active'
                                        : ''
                                }`}
                                onClick={() =>
                                    this.updateStorageMethod('sessionStorage')
                                }
                            >
                                Session Storage
                            </a>
                        </p>
                    </div>
                </footer>
            </>
        );
    }
}

const mapStateToProps = state => ({
    storageType: state.settings.storageType
});

export default connect(mapStateToProps, { loadSelectedProducts, setStorageMethod })(
    Footer
);
