import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IoE1uAJHQrkAtkBMpWDFmxDUQ08fHuOVJekJcoYacOIXomdk8kQZIYwaGErzU6jG7suVyfRxaTMDhAeNCg6z44M00wMDCUTIk';

  const onToken = token => {
    console.log(token);
    alert('Tack för din betalning!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='KÖRKLAR AB'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Ditt slutliga priset blir SEK  ${price}`}
      amount={priceForStripe}
      panelLabel='Betala'
      token={onToken}
      stripeKey={publishableKey}
      currency="SEK"
    />
  );
};

export default StripeCheckoutButton;