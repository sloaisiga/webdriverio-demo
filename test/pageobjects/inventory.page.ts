import Page from "./page";
import * as _ from "lodash";

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
   logout() {
    this.menuButton.click();
    this.logoutButton.click();
  }
  addAllItems() {
    this.addItemButton.map(e => e.click());
    const itemCardCounter: number = parseInt(this.shoppingCardCounter.getText());
    return itemCardCounter;
  }
}

export default new InventoryPage();
