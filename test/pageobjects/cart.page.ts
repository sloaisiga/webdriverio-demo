import Page from "./page";

class CartPage extends Page {
  get cartItems(): WebdriverIO.ElementArray {
    return $$(".cart_list .cart_item");
  }
  get cartButtons(): WebdriverIO.ElementArray {
    return $$(".cart_footer a")
  }
  get cartCheckoutButton(): WebdriverIO.Element {
    return $(".cart_footer .checkout_button")
  }
}

export default new CartPage();
