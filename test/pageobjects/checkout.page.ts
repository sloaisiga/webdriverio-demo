import Page from "./page";

class CheckoutPage extends Page {
  cartCheckoutButton: any;
  get firstName(): WebdriverIO.Element {
    return $("#first-name");
  }
  get lastName(): WebdriverIO.Element {
    return $("#last-name");
  }
  get zipCode(): WebdriverIO.Element {
    return $("#postal-code");
  }
  get checkoutCancelButton(): WebdriverIO.Element {
    return $(".cart_footer a")
  }
  get checkoutContinueButton(): WebdriverIO.Element {
    return $(".checkout_buttons .cart_button")
  }
}

export default new CheckoutPage();
