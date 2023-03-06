import Controller from '@controllers/controller';

class ProductController extends Controller {
  /**@type {Number} */
  price = 0

  constructor() {
    super();
    this.#getPrice();
  }

  #getPrice = () => {
    const priceBox = document.querySelector('.value.product-pricing__now-value.js-final-price')

    if (priceBox) {
      const price = priceBox.getAttribute('data-finalprice')
      this.price = Number(price)
    }
  }
}

export default ProductController;