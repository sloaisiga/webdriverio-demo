import inventory from "../pageobjects/inventory.page";
import login from "../pageobjects/login.page";
import cart from "../pageobjects/cart.page";
import checkout from "../pageobjects/checkout.page";

describe("Checkout Form", () => {
  before(() => {
    login.open("/");
    login.logon();
    browser.pause(300);
    inventory.addAllItems();
    inventory.shoppingCardCounter.click();
    cart.cartCheckoutButton.click();
  });

  it("should validate buttons", () => {
    expect(browser.getUrl()).toEqual(
      "https://www.saucedemo.com/checkout-step-one.html"
    );

    const buttons: WebdriverIO.Element[] = [
      checkout.checkoutCancelButton,
      checkout.checkoutContinueButton,
    ];

    buttons.forEach((e) => {
      const isDisplayed: boolean = e.isDisplayed();
      expect(isDisplayed).toBeTruthy;
    });
  });

  it("should add all items to the card", () => {
    checkout.firstName.setValue("Louis");
    checkout.lastName.setValue("Smith");
    checkout.zipCode.setValue("33165");
    checkout.checkoutContinueButton.click()
    expect(browser.getUrl()).toEqual("https://www.saucedemo.com/checkout-step-two.html")
  });
});
