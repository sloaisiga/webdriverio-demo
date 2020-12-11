import cart from "../pageobjects/cart.page"
import inventory from "../pageobjects/inventory.page"
import checkout from "../pageobjects/checkout.page"

class Interrogations {

    checkUrlPath() {
        const url: string= browser.getUrl()
        return url;
    }

    checkQtyOfCartItem(): number {
        return cart.cartItems.length
    }

    checkItemsQuantity(): number {
        return parseInt(inventory.shoppingCardCounter.getText())
    }

    checkButtonsVisibility(element: WebdriverIO.ElementArray): boolean {
        const areButtonsDisplayed: boolean[] = element.map(e=>e.isDisplayed())
        return areButtonsDisplayed.every(e=> e===true)
    }

    checkPriceInSummary(): boolean {
        const summary: string = checkout.summary.getText();
        const priceTotal: string = inventory.getItemPrices();
        return summary.includes(priceTotal);
    }
}

export default new Interrogations();