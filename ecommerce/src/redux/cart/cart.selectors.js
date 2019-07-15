import { createSelector } from 'reselect';

//There are two types of selectors, input selector (doesn't use createSelector) and output selector

//An Input Selector (gets the whole state and returns a part of it)
const selectCart = state => state.cart;

// An Output Selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

// An Output selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accummulatedQuantity, cartItem) => {
        return accummulatedQuantity + cartItem.quantity;
    }, 0)
)

export const selectCartTotal = createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce((accummulatedQuantity, cartItem) => {
        return accummulatedQuantity + cartItem.quantity * cartItem.price;
    }, 0)
)