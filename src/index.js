import { render, h } from 'preact'

import App from './app'


/** @jsx h */

const container = document.createElement('div');
container.setAttribute('id', 'dy-finance-calculator-widget');

const selector = document.querySelector('.finance-info');

if ( selector ) {
  selector.parentNode.insertBefore(container, selector);
  render(<App />, container);
}