import login from "../pageobjects/login.page";
import inventory from "../pageobjects/inventory.page";

describe("Login Form", () => {
  before(() => {
    login.open("/");
    browser.pause(300)
  });

  it("should validate required elements", () => {
    login.submit()
    browser.pause(300)
    const errorMessage: string = login.errorMessage.getText()
    expect(errorMessage).toEqual("Epic sadface: Username is required")
  });

  it("should login and logout successfully as standard user", () => {
    login.logon();
    expect(browser.getUrl()).toEqual("https://www.saucedemo.com/inventory.html")
    
    inventory.logout();
    expect(browser.getUrl()).toEqual("https://www.saucedemo.com/index.html");
  });
});

