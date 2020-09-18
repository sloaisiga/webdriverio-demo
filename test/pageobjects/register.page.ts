import Page from './page'

class RegisterPage extends Page {

    get firstName(): WebdriverIO.Element { return $('#firstname') }
    get lastName(): WebdriverIO.Element { return $('#lastname') }
    get userName(): WebdriverIO.Element { return $('#userName') }
    get password(): WebdriverIO.Element { return $('#password') }
    get catcha(): WebdriverIO.Element { return $(".rc-anchor-center-item.rc-anchor-checkbox-holder")}
    get registerButton() { return $('#register') }

    submit() {
        this.registerButton.click()
    }

}

export default new RegisterPage()
