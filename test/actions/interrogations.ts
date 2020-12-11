import cart from "../pageobjects/cart.page"
import inventory from "../pageobjects/inventory.page"
import checkout from "../pageobjects/checkout.page"

class Interrogations {
    /**
     * Interrogation to get the path navigation
     * @returns string
     */
    checkUrlPath(): string {
        const url: string= browser.getUrl()
        return url;
    }
    /**
     * Interrogation to get the quantiy of items in the cart
     * @returns number
     */
    checkQtyOfCartItem(): number {
        return cart.cartItems.length
    }
    /**
     * Interrogation to get items quantity in cart
     * @returns number
     */
    checkItemsQuantity(): number {
        return parseInt(inventory.shoppingCardCounter.getText())
    }
    /**
     * Interrogration to check specific buttons visibility 
     * @param  {WebdriverIO.ElementArray} element
     * @returns boolean
     */
    checkButtonsVisibility(element: WebdriverIO.ElementArray): boolean {
        const areButtonsDisplayed: boolean[] = element.map(e=>e.isDisplayed())
        return areButtonsDisplayed.every(e=> e===true)
    }
    /**
     * Interrogration to check if price is included in summary
     * @returns boolean
     */
    checkPriceInSummary(): boolean {
        const summary: string = checkout.summary.getText();
        const priceTotal: string = inventory.getItemPrices();
        return summary.includes(priceTotal);
    }
    /**
     * Interrogation to get Text in element provided
     * @param  {WebdriverIO.Element} element
     * @returns string
     */
    checkText(element: WebdriverIO.Element): string {
       return element.getText()
    }
}

export default new Interrogations();