import cart from "../pageobjects/cart.page"
import inventory from "../pageobjects/inventory.page"
class Interrogations {

    checkUrlPath() {
        const url: string= browser.getUrl()
        return url;
    }

    checkExistenceOfCartItem(): number {
        return cart.cartItems.length
    }

    checkItemsQuantity(): number {
        return parseInt(inventory.shoppingCardCounter.getText())
    }
}

export default new Interrogations();