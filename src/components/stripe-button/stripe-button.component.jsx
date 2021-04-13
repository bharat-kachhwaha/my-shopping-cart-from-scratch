import React from 'react';

import StripeCheckout from "react-stripe-checkout";

import './stripe-button.styles.scss';

const StripCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IflikSExca2fGzeewiGHoXoGHbcaaVPGNGi0EmtSbI8PB4bDesZSqkFqwSiz1rmMClvn97lMxtcOjTS5Ie8xXbh00bjCizOoZ';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesfull');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Kachhwaha Clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripCheckoutButton;