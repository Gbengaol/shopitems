import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.util';
import CardIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">Contact</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}> Sign Out</div>
                    : <Link to="/signin" className="option">Sign In</Link>
                }
                <CardIcon />
            </div>
            {
                hidden ? null : <CartDropdown /> 
            }
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden 
});

export default connect(mapStateToProps)(Header);