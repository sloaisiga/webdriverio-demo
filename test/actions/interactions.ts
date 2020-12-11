import login from "../pageobjects/login.page"
import inventory from "../pageobjects/inventory.page"
import cart from "../pageobjects/cart.page"
import checkout from "../pageobjects/checkout.page"
import { Chance } from "chance"
const chance = new Chance()

/**
 * Possible interactions with the applications.
 * The level of detail expressed here depends on the project needs.
 */
class Interactions {
    /**
     * Log the user into his/her account based on user's credentials.
     * @param {string} username The user's account username.
     * @param {string} password The user's account password.
     */
    logIntoAccount(username, password) {
        login.userNameInput.setValue(username)
        login.passwordInput.setValue(password)
        login.loginButton.click()
        browser.pause(6000)
    }
    /**
     * Logout the user from his/her account 
     */
    logOut() {
        inventory.menuButton.click()
        inventory.logoutButton.click()
        browser.pause(6000)
    }

    addAllItems(): void {
        inventory.addItemButton.map(e => e.click())
    }

    goToCart(): void {
        return cart.shoppingCardCounter.click()
    }

    checkout(): void {
        cart.cartCheckoutButton.click()
    }

    fillCheckoutForm(): void {
        checkout.firstName.waitForDisplayed({timeout: 5000, timeoutMsg: `First name input is not displayed after 5000 milliseconds`})
        checkout.firstName.setValue(chance.first())
        checkout.lastName.setValue(chance.last())
        checkout.zipCode.setValue(chance.zip())
        checkout.checkoutContinueButton.click()
        browser.pause(200)
    }
    
    submitCart(): void {
        checkout.submitCartButton.click()
    }
}

export default new Interactions()