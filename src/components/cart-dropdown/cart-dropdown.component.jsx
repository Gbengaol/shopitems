import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                        cartItems.map((cartItem) => {
                            return <CartItem key={cartItem.id} item={cartItem} />
                        }) :
                        <span className="empty-message">Your Cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => { 
                history.push("/checkout");
                dispatch(toggleCartHidden(dispatch))

            }}> Go to Checkout</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));