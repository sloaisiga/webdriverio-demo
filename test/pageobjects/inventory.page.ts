import Page from "./page";
import * as _ from "lodash";

class InventoryPage extends Page {
  get menuButton(): WebdriverIO.Element {
    return $(".bm-burger-button button");
  }
  get logoutButton(): WebdriverIO.Element {
    return $("#logout_sidebar_link")
  }
   logout() {
    this.menuButton.click();
    this.logoutButton.click();
  }
}

export default new InventoryPage();
