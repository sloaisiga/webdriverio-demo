import inventory from "../pageobjects/inventory.page";
import login from "../pageobjects/login.page";
import cart from "../pageobjects/cart.page";
import checkout from "../pageobjects/checkout.page";
import { Chance } from "chance";
const chance = new Chance();

describe("Checkout Form", () => {
  let priceTotal: number;
  before(() => {
    login.open("/");
    login.logon();
    browser.pause(300);
    inventory.addAllItems();
    priceTotal = inventory.getItemPrices();
    inventory.shoppingCardCounter.click();
    cart.cartCheckoutButton.click();
  });

  it("should validate buttons", () => {
    expect(browser.getUrl()).toEqual(
      "https://www.saucedemo.com/checkout-step-one.html"
    );

    const buttons: WebdriverIO.Element[] = [
      checkout.checkoutCancelButton,
      checkout.checkoutOneCancelButton,
    ];

    const areButtonsDisplayed: boolean = checkout.validateButtonsDisplayed(buttons);
    expect(areButtonsDisplayed).toBeTruthy;
  });

  it("should add checkout user information", () => {
    checkout.firstName.setValue(chance.first());
    checkout.lastName.setValue(chance.last());
    checkout.zipCode.setValue(chance.zip());
    checkout.checkoutContinueButton.click();
    browser.pause(200);
    expect(browser.getUrl()).toEqual(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
  });

  it("should validate checkout information", () => {
    const summary: string = checkout.summary.getText();
    const isPriceTotal: boolean = summary.includes(priceTotal.toString());
    expect(isPriceTotal).toBeTruthy;
    checkout.checkoutSecondPartFooter.forEach((e) => {
      const isDisplayed: boolean = e.isDisplayed();
      expect(isDisplayed).toBeTruthy;
    });

    checkout.submitCartButton.click();
    expect(browser.getUrl()).toEqual(
      "https://www.saucedemo.com/checkout-complete.html"
    );
  });

  it("should complete order and display message", () => {
    const header: string = checkout.completeCheckoutHeader.getText();
    const completeText: string = checkout.completeCheckoutText.getText();
    const ponyExpressImg: boolean = checkout.completeCheckoutImage.isDisplayed();

    expect(header).toEqual("THANK YOU FOR YOUR ORDER");
    expect(completeText).toEqual(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
    expect(ponyExpressImg).toBeTruthy;
  });
});

