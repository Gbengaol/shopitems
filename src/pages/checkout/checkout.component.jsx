import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <React.Fragment>
            <div className="checkout-page">
               <div className="checkout-header">
                   <div className="header-block">
                        <span>Product</span>
                   </div>
                   <div className="header-block">
                        <span>Description</span>
                   </div>
                   <div className="header-block">
                        <span>Quantity</span>
                   </div>
                   <div className="header-block">
                        <span>Price</span>
                   </div>
                   <div className="header-block">
                        <span>Total</span>
                   </div>
                   <div className="header-block">
                        <span>Remove</span>
                   </div>
                </div> 
                {
                    cartItems.map(cartItem => (
                        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
                    ))   
                }
                <div className="total">
                    <span>TOTAL: ${total}</span>
                </div>
                <div className="text-warning">
                    * Please use the following test credit card information for payment *                    
                    <br/>
                    Card Number: 4242 4242 4242 4242
                    <br/>
                    CVV: 123
                    <br/>
                    Exp: 01/20   
                </div>
                <StripeCheckoutButton price={total} />
            </div>
        </React.Fragment> 
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);