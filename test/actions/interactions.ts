import login from "../pageobjects/login.page"
import inventory from "../pageobjects/inventory.page"

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

    addAllItems(): number {
        inventory.addItemButton.map(e => e.click());
        const itemCardCounter: number = parseInt(inventory.shoppingCardCounter.getText());
        return itemCardCounter;
    }
}

export default new Interactions();