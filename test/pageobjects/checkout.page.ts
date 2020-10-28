import Page from "./page";
import { CONNREFUSED } from "dns";

class CheckoutPage extends Page {
  get firstName(): WebdriverIO.Element {
    return $("#first-name");
  }
  get lastName(): WebdriverIO.Element {
    return $("#last-name");
  }
  get zipCode(): WebdriverIO.Element {
    return $("#postal-code");
  }
  get checkoutContinueButton(): WebdriverIO.Element {
    return $(".checkout_buttons .cart_button")
  }
  get submitCartButton(): WebdriverIO.Element {
    return $(".cart_footer .cart_button")
  }
  get checkoutSecondPartFooter(): WebdriverIO.ElementArray {
    return $$(".cart_footer a")
  }
  get summary(): WebdriverIO.Element {
    return $(".summary_subtotal_label")
  }
  get completeCheckoutHeader(): WebdriverIO.Element {
    return $("#checkout_complete_container .complete-header")
  }
  get completeCheckoutText(): WebdriverIO.Element {
    return $("#checkout_complete_container .complete-text")
  }
  get completeCheckoutImage(): WebdriverIO.Element {
    return $("#checkout_complete_container img")
  }
}

export default new CheckoutPage();