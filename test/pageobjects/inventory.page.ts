import Page from "./page";

class InventoryPage extends Page {
  get menuButton(): WebdriverIO.Element {
    return $(".bm-burger-button button");
  }
  get logoutButton(): WebdriverIO.Element {
    return $("#logout_sidebar_link")
  }
  get inventoryItems(): WebdriverIO.ElementArray {
    return $$("#inventory_container .inventory_list .inventory_item")
  }
  get addItemButton(): WebdriverIO.ElementArray {
    return $$("#inventory_container .inventory_list .inventory_item button")
  }
  get shoppingCardCounter(): WebdriverIO.Element {
    return $(".shopping_cart_badge")
  }
  get itemPrice(): WebdriverIO.ElementArray {
    return $$("#inventory_container .inventory_item_price")
  }
   logout() {
    this.menuButton.click();
    this.logoutButton.click();
  }
  addAllItems(): number {
    this.addItemButton.map(e => e.click());
    const itemCardCounter: number = parseInt(this.shoppingCardCounter.getText());
    return itemCardCounter;
  }
  getItemPrices(): number {
    let priceList: any[] = this.itemPrice.map((e) => e.getText());
    priceList = priceList.map((e) => parseFloat(e.replace("$", ""))
    );
    const priceTotal = (accumulator, currentValue) => accumulator + currentValue;
    return priceList.reduce(priceTotal);
  }
}

export default new InventoryPage();
