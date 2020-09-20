import inventory from "../pageobjects/inventory.page";
import login from "../pageobjects/login.page";

describe("Inventory Form", () => {
  before(() => {
    login.open("/");
    login.logon();
    browser.pause(300);
  });

  it("should validate item list", () => {
    const itemListLenght: number = inventory.inventoryItems.length;
    console.log("itemListLenght ", itemListLenght);
    expect(itemListLenght).toEqual(6);
  });

  it("should add all items to the card", () => {
  const itemCardCounter: number = inventory.addAllItems();  
  expect(itemCardCounter).toEqual(6)
  });
});

