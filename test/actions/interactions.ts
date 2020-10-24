import login from "../pageobjects/login.page"

/**
 * Possible interactions with the applications.
 * The level of detail expressed here depends on the project needs.
 */
export default new class Interactions {
    /**
     * Logs the user into his account based on user's credentials.
     * @param {string} username The user's account username.
     * @param {string} password The user's account password.
     */
    logIntoAccount(username, password) {
        login.userNameInput.setValue(username)
        login.passwordInput.setValue(password)
        login.loginButton.click()
        browser.pause(6000)
    }
}