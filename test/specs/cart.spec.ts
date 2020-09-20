import inventory from "../pageobjects/inventory.page";
import login from "../pageobjects/login.page";
import cart from "../pageobjects/cart.page"

describe("Cart Form", () => {
  before(() => {
    login.open("/");
    login.logon();
    browser.pause(300);
  });

  it("should validate buttons", () => {
    const areButtonsDisplayed: boolean[] = cart.cartButtons.map(e=>e.isDisplayed())
    const result: boolean = areButtonsDisplayed.every(e=> e===true)
    expect(result).toBeTruthy;
  });

  it("should add all items to the card", () => {
    const itemCardCounter: number = inventory.addAllItems();
    expect(itemCardCounter).toEqual(6);

    inventory.shoppingCardCounter.click();
    browser.pause(500);
    expect(browser.getUrl()).toEqual("https://www.saucedemo.com/cart.html");
    
    const cartItemLength: number = cart.cartItems.length;
    expect(cartItemLength).toEqual(6)

    cart.cartCheckoutButton.click();
    browser.pause(500);
    expect(browser.getUrl()).toEqual("https://www.saucedemo.com/checkout-step-one.html")
  });
});
