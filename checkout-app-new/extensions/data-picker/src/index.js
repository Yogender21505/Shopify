import {extend, Link} from '@shopify/checkout-ui-extensions';
extend('Checkout::Dynamic::Render', (root) => {
  const link = root.createComponent(
    Link,
    {to: 'https://www.shopify.ca/climate/sustainability-fund'},
    'Acqulo-Plugin',
  );

  root.appendChild(link);
});