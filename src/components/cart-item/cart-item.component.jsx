import React from 'react';
import { connect } from 'react-redux';
import './cart-item.styles.scss';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

const CartItem  = ({item, addItem, removeItem, clearItemFromCart}) => {
    const { imageUrl, price, name, quantity } = item;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price"> 
                    {quantity} x $ {price}
                </span>
                <div className="icons-container">
                    <span className="icon" onClick={() => removeItem(item)}> &#10094;</span>
                    <span className="icon" onClick={() => addItem(item)}> &#10095;</span>
                    <span className="icon" onClick={() => clearItemFromCart(item)}> &#10005;</span>
                </div>
                
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);