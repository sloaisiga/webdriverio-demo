import Page from "./page";

class InventoryPage extends Page {
  get menuButton(): WebdriverIO.Element {
    return $(".bm-burger-button button");
  }
  get logoutButton(): WebdriverIO.Element {
    return $("#logout_sidebar_link")
  }
  get addItemButton(): WebdriverIO.ElementArray {
    return $$("#inventory_container .inventory_list .inventory_item button")
  }
  get shoppingCardCounter(): WebdriverIO.Element {
    return $(".shopping_cart_badge")
  }
  get itemPrice(): WebdriverIO.ElementArray {
    return $$(".cart_item_label .inventory_item_price")
  }

  getItemPrices(): string {
    let priceList: any[] = this.itemPrice.map((e) => e.getText());
    priceList = priceList.map((e) => parseFloat(e.replace("$", ""))
    );
    let priceTotal: any = (accumulator, currentValue) => accumulator + currentValue;
    console.log(`priceTotal ${priceTotal}`)
    priceTotal = priceList.reduce(priceTotal).toString()
    console.log(`priceTotal ${priceTotal}`)
    return priceTotal;
}
}

export default new InventoryPage();