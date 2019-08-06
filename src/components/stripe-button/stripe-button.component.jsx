import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const { priceForStripe } = price * 100; 
    const publishableKey = 'pk_test_G1qj3WjY5U5WquN95k1XETTG001rz95lff';
    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Make payment for products(s)"
            name="Gbenga's Application"
            billingAddress
            shippingAddress
            description={`Your total amount is $${price}`}
            image='http://svgshare.com/i/CUz.svg'
            amount={priceForStripe}
            panelLabel='Make Payment for product(s)'
            stripeKey={publishableKey}
            token={onToken}
        />
    )
}

export default StripeCheckoutButton;