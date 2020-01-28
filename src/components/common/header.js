import React from 'react';
import logo from '../../assets/images/logo.svg';

import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <>
                <header className="grid-x">
                    <div className="cell small-12 medium-12 large-12">
                        <img src={logo} />
                    </div>
                </header>
            </>
        );
    }
}

export default Header;
